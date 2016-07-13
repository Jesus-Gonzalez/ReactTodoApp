var path = require('path');

module.exports = {
  entry: path.join('src', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist', 'build'),
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
      { test: /\.jsx?/, loader: 'babel-loader', exclude: [/node_modules/] }
    ]
  }
};
