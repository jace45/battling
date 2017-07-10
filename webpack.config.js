var path = require('path');
var __dirname = '/';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.ProvidePlugin({"React": "react"})
    ]
}