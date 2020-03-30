const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config");

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production"
});

module.exports = buildWebpackConfig;
