const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');


const BUILD_DIR = path.resolve(__dirname, './client/public');
const APP_DIR = path.resolve(__dirname, './client/src');

module.exports = {
  entry: `${APP_DIR}/App.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins:[
    new Dotenv({
      path: path.resolve('./.env'),
      safe: false,
      systemvars: true,
      silent: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    })
  ]
};
