const path = require("path");
const vCfg = require("./__vCfg");

module.exports = {
  mode: vCfg.mode,
  entry: {
    vApp: "./src/root.js",
    dev_tests: "./src/__developer_testing.js",
  },
  target: vCfg.target,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].v_pack.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
