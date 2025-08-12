const path = require('path');

module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      // ...otros loaders...
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        include: /cv-api[\\\/]src/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        enforce: 'post'
      }
    ]
  },
  
  target: 'web', // O 'node' si es para Node.js puro
  mode: 'development', // O 'production' según tu necesidad
  devtool: 'source-map'
};