var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      exclude: [/node_modules/]
    })
  ],
  module: {
    loaders: [
      { test: /\.jsx?/, loader: 'babel', exclude: [/node_modules/] }
    ]
  }
};
