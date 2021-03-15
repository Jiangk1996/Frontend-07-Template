/*
 * @Author: ailiang
 * @Date: 2021-03-09 10:40:41
 * @LastEditors: ailiang
 * @LastEditTime: 2021-03-10 10:37:21
 */
module.exports = {
  entry: './main.js',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx',{
              pragma: 'createElement'
            }]]
          }
        }
      }
    ]
  },
  mode: 'development'
}