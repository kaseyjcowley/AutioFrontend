module.exports = {
  context: __dirname + '/assets',
  entry: {
    'app': './js/app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [{test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/}],
    preLoaders: [{test: /\.js$/, loaders: ['eslint-loader'], exclude: /node_modules/}]
  }

};
