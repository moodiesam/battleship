const path = require('path');

 module.exports = {
   mode: 'development',
   entry: './src/index.js',
   plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
    }),
    ],
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 };