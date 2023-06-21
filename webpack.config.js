const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
  },
}
