const path = require('path') // we import using require
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: '[contenthash].js', // this will be our bundled code!
    path: path.resolve(__dirname, 'assets', 'scripts')
  },
  devtool: 'cheap-source-map',
  plugins: [new CleanPlugin.CleanWebpackPlugin()]
  // devServer : {contentbase :}
}
