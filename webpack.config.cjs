
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'module.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: 'defaults',
                modules: 'commonjs'
              }]
            ],
          },
        },
      },
    ]
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname ),

    },
    compress: true,
  },
  mode: 'development' // Добавляем режим разработки
};
