var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'client', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?/, loader: 'babel-loader', exclude: [/node_modules/] }
    ]
  }
};
