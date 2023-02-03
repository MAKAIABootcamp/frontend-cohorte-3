const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: {
    app: ["@babel/polyfill", "./src/app/index.js"],
    form: ["@babel/polyfill", "./src/app/form.js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].bundle.js",
  },
  devServer: {
    port: 5055,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      chunks: ["app"],
    }),
    new HTMLWebpackPlugin({
      filename: "form.html",
      template: "./src/form.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      chunks: ["form"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/app.bundle.css",
    }),
  ],
};
