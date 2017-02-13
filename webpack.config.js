const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  context: src,
  entry: 'index.jsx',
  output: {
    filename: 'bundle.js',
    path: dist
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          src
        ],
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.s?css$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules', src],
    extensions: ['.js', '.json', '.jsx', '.css', '.scss']
  },
  devServer: {
    contentBase: src
  }
}
