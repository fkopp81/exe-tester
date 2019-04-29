const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: {
    app: [path.join(__dirname, "../build/tsc/index.js")]
  },
  externals: [nodeExternals()],
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../build/webpack"),
    filename: "index.js"
  },
  target: "node",
};
