const path = require("path");
const vCfg = require("./__vCfg");
const mode = vCfg.devMode ? "development" : "production";

module.exports = {
  mode: mode,
  entry: {
    app_root: "./src/app_root.js",
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
