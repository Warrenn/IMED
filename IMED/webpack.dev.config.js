let webpack = require('webpack');
let path    = require('path');
let config  = require('./webpack.config');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output = {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'Content')
};

config.plugins = config.plugins.concat([
    new ExtractTextPlugin("[name].css", {
        allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
