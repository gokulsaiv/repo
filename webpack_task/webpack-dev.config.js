const HtmlWebpackPlugin = require("html-webpack-plugin");
//const CopyWebpackPlugin = require('copy-webpack-plugin');
//import css from "file.css";

const path = require("path");
module.exports = {
  mode:'development',
    devtool:false,
    entry:['./src/index.js'],
    output:{
      path:__dirname+'/build',
      filename:'build.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        }
      ],
    },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
      template:'./src/index.html'
    }),
    
    
  ],
};
