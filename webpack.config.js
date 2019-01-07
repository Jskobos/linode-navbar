var path = require('path');

module.exports = {
  mode: 'production',
  entry:  ['./src/wrapper.tsx'],
  output: {
      libraryTarget: 'var',
      library: 'navbar',
      path:     path.resolve(__dirname, "build"),
      filename: 'navbar.js',
  },
  module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: [
            path.resolve(__dirname, "src")
          ],
          exclude: [
            path.resolve(__dirname, "node_modules")
          ],
          loader: "babel-loader",
        },
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre"
        },
        {
          test: /\.css$/,
          use: [ 'css-loader', 'postcss-loader' ]
        }
      ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.css'],
  },
};