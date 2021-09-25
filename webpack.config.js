const path = require("path");
const vConfig = require("./config/v_system_config");

module.exports = {
  mode: vConfig.webpackMode,
  entry: {
    vApp: "./src/root.js",
    dev_tests: "./src/__developer_testing.js",
  },
  target: vConfig.target,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].v_pack.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
    ],
  },
};
