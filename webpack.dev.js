const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // static: './src/client/views',
    static: './src/client',
    // static: '/dist',
    // This is important to allow webpack-dev-server to reload/refresh the page when static file changes are detected 
    hot: false, 
  },
  // output: {
  //   libraryTarget: 'var',
  //   library: 'Client'
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        // use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader' ]
        // It's recommended to use style-loader in dev mode instead of mini-css-extract-plugin for better performance
        use: ['style-loader', 'css-loader','sass-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
}