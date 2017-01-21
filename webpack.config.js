var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/views');
var APP_DIR = path.resolve(__dirname, 'src/scripts');

var config = {
  entry: {
    main: APP_DIR + '/MainComponent.jsx',
    cookbook: APP_DIR + '/MainCookBook.jsx',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module : {
  loaders : [
     {
      test : /\.jsx?/,
      include : APP_DIR,
      loader : 'babel'
     }
  ]
}
};

module.exports = config;
