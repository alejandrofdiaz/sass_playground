const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const basePath = __dirname;

module.exports = {
	entry: {
		app: './src/main.js',
		styles: './src/content/main.scss'
	},
	output: {
		path: path.join(basePath, 'dist'),
		filename: '[chunkhash][name].js'
	},
	module: {
		rules: [
			{
				test: /.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{loader: 'css-loader'},
						{loader: 'sass-loader'}
					]
				})
			}
		]
	},
	devServer: {
		port: 8080
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['styles','manifest']
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html', //Name of file in .dist
			template: './src/index.html',
			hash: true
		}),
		new ExtractTextPlugin({
			filename: '[chunkhash].[name].css',
			allChunks: true
		})
	]
}