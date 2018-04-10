var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');


module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        main: path.join(__dirname, '/src/main.jsx'),
        vendor: path.join(__dirname, '/src/vendor.js')          
    },
    output: {
        path: path.join(__dirname, '/../warehouse/dist'),
        publicPath: 'http://localhost/',
        filename: '[name].js',
    },
    plugins: [
        new ExtractTextWebpackPlugin("style.css")
    ],
    resolve: {
        extensions : ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader']
            },
            {
				test: /\.css$/,
				use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use: 'css-loader'
                })
            },
            {
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    }

}