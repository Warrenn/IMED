var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var paths = require('./paths.js').default;

module.exports = {
    devtool: 'source-map',
    entry: {},
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', ['css', 'postcss']) },
            { test: /\.less/, loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'less']) },
            { test: /\.svg/, loader: 'file' },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?mimetype=application/octet-stream' },
            { test: /\.png$/, loader: "file?mimetype=image/png" },
            { test: /\.(jpg|jpeg)$/, loader: "file?mimetype=image/jpeg" }
        ]
    },
    postcss: [
        require('postcss-inline-svg')({
            removeFill: true
        }),
        require('autoprefixer')({ browsers: paths.prefixerBrowsers })
    ],
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: paths.rootPage,
            inject: 'body',
            hash: false,
            mobile: true
        }),
        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                return module.resource && module.resource.indexOf(paths.rootPath) === -1;
            }
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ]
};