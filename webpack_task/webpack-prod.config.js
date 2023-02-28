const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin=require('terser-webpack-plugin');
const path = require("path");
module.exports = {
  mode:'production',
    devtool:false,
    entry:['./src/index.js'],
    output:{
      path:__dirname+'/dist-build',
      filename:'build-prod.js'
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
        },{
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile:  path.resolve(__dirname, '\src/babel.config.babelrc'),
            },
          },
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
