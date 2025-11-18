const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'), // main TSX entry
  mode: 'development', // switch to 'production' for prod builds
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true, // optional: auto rebuild on changes
  module: {
    rules: [
      {
        test: /\.tsx?$/, // handle .ts and .tsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',      // modern JS
              '@babel/preset-typescript', // TypeScript
              '@babel/preset-react',    // React JSX
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // image files
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // resolve these
  },
  plugins: [
    new WebpackBar(), // shows build progress
    new CleanWebpackPlugin(), // cleans dist folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.ejs'), // source template
      filename: 'index.html', // output file in dist
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src/client/theme/cropedLogo.png'),
      inject: true,
    }),
  ],
  devtool: 'source-map', // optional: helps with debugging
};
