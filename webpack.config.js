const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.REACT_APP_ENV === 'prod' ? 'production' : 'development'
const isDev = mode === 'development'

const resolve = url => {
  return path.resolve(__dirname, url)
}

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
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
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