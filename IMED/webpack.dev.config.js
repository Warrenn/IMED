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

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
