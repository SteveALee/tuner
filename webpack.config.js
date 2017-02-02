const path = require('path')

module.exports = {
  entry: {
    app: './src/app/app.ts',
  },
  output: {
      path: path.resolve(__dirname, 'build/js'),
      filename: '[name].js',
      publicPath: '/js/'
  },
  resolve: {
      extensions: ['.ts', '.js']
  },
  module: {
      loaders: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
  },
  devtool: "inline-source-map"
}
