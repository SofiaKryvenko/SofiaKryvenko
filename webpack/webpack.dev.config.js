const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  module: {},
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new webpack.SourceMapDevToolPlugin({
    //   filename: "[file].map"
    // })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true
  }
  //for debugging process
  // devtool: "source-map"
});

module.exports = devWebpackConfig;
