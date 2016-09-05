var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var AppCachePlugin = require('appcache-webpack-plugin');
var paths = require('./paths.js').default;

config.output = {
    filename: '[name].bundle.js',
    publicPath: '',
    path: paths.dest
};

config.plugins = config.plugins.concat([
    new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
    }),
    // Reduces bundles total size
    new webpack.optimize.UglifyJsPlugin({
        mangle: {

            // You can specify all variables that should not be mangled.
            // For example if your vendor dependency doesn't use modules
            // and relies on global variables. Most of angular modules relies on
            // angular global variable, so we should keep it unchanged
            except: ['$super', '$', 'exports', 'require', 'angular']
        }
    }),
    new AppCachePlugin({
        output: 'cache.manifest'
    })
]);

module.exports = config;
