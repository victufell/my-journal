const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["./src/index.js", "./src/styles/main.scss"],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./public/dist")
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        // loader: ETP.extract('style-loader', 'css-loader!sass-loader'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!sass-loader'
        }),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        options: {
          presets: ["react", "stage-0", "es2015"],
          plugins: ["transform-class-properties", "transform-decorators-legacy"]
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      }
    ]
  },
  devServer: {
    contentBase: "./public/",
    watchContentBase: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React':     'react'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',				
      template: 'public/index.ejs',
      hash: true,
      inject: true
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].[hash].css'
    }),

    new webpack.optimize.UglifyJsPlugin()
  ]
};
