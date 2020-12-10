const nodeExternals = require('webpack-node-externals');
const path = require('path');
const {
  NODE_ENV = 'production',
} = process.env;
module.exports = {
  entry: './src/index.js',
  mode: NODE_ENV,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  }
}