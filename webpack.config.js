const path = require('path') // we import using require
// eslint-disable-next-line no-unused-vars
const CleanPlugin = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js', // this will be our bundled code!
    path: path.resolve(__dirname, 'assets', 'scripts')
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()]
  // devServer : {contentbase :}
}
