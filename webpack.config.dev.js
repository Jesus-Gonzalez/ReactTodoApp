var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'dev', 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?/, loader: 'babel-loader', exclude: [/node_modules/] }
    ]
  }
};
