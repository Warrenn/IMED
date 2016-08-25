let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {},
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', ['css', 'postcss']) },
            { test: /\.less/, loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'less']) },
            { test: /\.svg/, loader: 'svg-url' },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?mimetype=application/vnd.ms-fontobject' },
            { test: /\.png$/, loader: "url?mimetype=image/png" },
            { test: /\.(jpg|jpeg)$/, loader: "url?mimetype=image/jpeg" }
        ]
    },
    postcss: [
        require('postcss-inline-svg')({
            removeFill: true
        }),
        require('autoprefixer'),
        require('cssnano'),
        require('postcss-merge-rules')
    ],
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: 'Content/index.html',
            inject: 'body',
            hash: false,
            mobile: true
        }),
        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, 'Content')) === -1;
            }
        })
    ]
};
