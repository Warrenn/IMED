let webpack = require('webpack');
let path    = require('path');
let config  = require('./webpack.config');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let Purify = require("purifycss-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var AppCachePlugin = require('appcache-webpack-plugin');

config.output = {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'wwwroot')
};

config.plugins = config.plugins.concat([
    new ExtractTextPlugin("[name].css", {
        allChunks: true
    }),
    new Purify({
        basePath: path.resolve(__dirname, 'Content'),
        paths: [
            "**/*.html"
        ],
        resolveExtensions: '.html',
        purifyOptions: {
            minify: true
        }
    }),
    new OptimizeCssAssetsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['$super', '$', 'exports', 'require', 'angular']
        }
    }),
    new AppCachePlugin()
]);

module.exports = config;
