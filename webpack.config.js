const path = require('path')

const mode = process.env.REACT_APP_ENV === 'prod' ? 'production' : 'development'

const resolve = url => {
  return path.resolve(__dirname, url)
}

module.exports = {
  mode,
  output: {
    path: resolve('./dist'),
    filename: 'main.js'
  },
  entry: resolve('./src/App.tsx'),
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}