var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');
var paths = require('./paths.js').default;

config.output = {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: paths.rootPath
};

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
