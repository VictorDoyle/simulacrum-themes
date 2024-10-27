const path = require("path");

module.exports = {
  entry: {
    artist: "./artist/src/index.tsx",
    blog: "./blog/src/index.tsx",
    shop: "./shop/src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  mode: "development",
};
