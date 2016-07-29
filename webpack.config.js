module.exports = {
  context: __dirname + "/src",
  entry: './app.js',
  output: {
    path: __dirname + "/src/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.html$/, loader: 'raw' }
    ],
    resolve: {
      extensions: ['.js']
    }
  }
};