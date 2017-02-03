const path = require('path')

module.exports = {
  entry: {
    app: './src/app/app.ts',
  },
  output:{
      path: __dirname + '/build/js',
      filename: '[name].js',
      publicPath: '/js/'
  },
  devtool: "source-map",
  resolve: {
      extensions: ['\*', '.ts', '.js']
  },
  module: {
      rules: [
          { test: /\.ts$/, use: 'awesome-typescript-loader' },
          { test: /\.js$/, use: "source-map-loader", enforce: "pre" }
      ]
  }
}
