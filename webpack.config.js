const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")

const mode = process.env.REACT_APP_ENV === 'prod' ? 'production' : 'development'
const isDev = mode === 'development'

const resolve = url => {
  return path.resolve(__dirname, url)
}

const assetsPath = url => {
  return path.resolve(__dirname, 'assets', url)
}

// Create the fallback path (the production .env)
const basePath = resolve('./.env')
// We're concatenating the environment name to our filename to specify the correct env file!
const envPath = `${basePath}.${isDev ? 'dev' : 'prod'}`;
// Set the path parameter in the dotenv config
const fileEnv = dotenv.config({ path: envPath }).parsed;
const baseEnv = dotenv.config({ path: basePath }).parsed;
const allEnv = { ...baseEnv, ...fileEnv }
// reduce it to a nice object, the same as before (but with the variables from the file)
const envKeys = Object.keys(allEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(allEnv[next]);
  return prev;
}, {});

console.log(JSON.stringify(envKeys))

module.exports = {
  mode,
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash].bundle.js'
  },
  entry: resolve('src/index.tsx'),
  resolve: {
    // path alias 参考 https://youtiao66.github.io/blog/go-to-definition-in-vscode-vue/
    alias: {
      '@': resolve('src'),
    },
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html
      { test: /\.tsx?$/, loader: "babel-loader" },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: assetsPath('img/[name].[hash:7].[ext]')
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: assetsPath('media/[name].[hash:7].[ext]')
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: assetsPath('fonts/[name].[hash:7].[ext]')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "dist" }
      ],
    }),
    new webpack.DefinePlugin(envKeys)
  ],
  devtool: isDev ? 'eval-source-map' : '',
  devServer: {
    static: {
      directory: resolve('public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 9010,
  }
}