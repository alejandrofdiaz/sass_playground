const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const basePath = __dirname;

module.exports = {
	entry: {
		app: './src/main.js',
	},
	output: {
		path: path.join(basePath, 'dist'),
		filename: '[chunkhash][name].js'
	},
	module: {

	},
	devServer: {
		port: 8080
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['manifest']
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html', //Name of file in .dist
			template: './src/index.html',
			hash: true
		})
	]
}