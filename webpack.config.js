var path = require('path');
var __dirname = '/';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {

    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './app/index.html'})
    ]
}