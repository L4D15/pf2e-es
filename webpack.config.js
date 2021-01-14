const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: "./src/index.js",
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin( { cleanStaleWebpackAssets: false }),
    new CopyPlugin({
      patterns: [
        { from: 'static', to: 'static'}
      ]
    }
    ),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
