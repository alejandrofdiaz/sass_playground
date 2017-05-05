const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const basePath = __dirname;

module.exports = {
	entry: {
		app: './src/main.js',
		styles: './src/content/sass/main.scss',
		vendor: [
			'jquery'
		],
		vendorStyles: [
			'bootstrap-loader/extractStyles'
		]
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
						{ loader: 'css-loader' },
						{ loader: 'sass-loader' },
						{
							loader: 'sass-resources-loader',
							options: {
								resources: [
									'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_mixins',
									'src/content/sass/bootstrap/_variables.scss'
								]
							}
						}
					]
				})
			},
			{
				test: /\.(woff2?|svg)$/,
				loader: 'url-loader?limit=10000'
			},
			{
				test: /\.(ttf|eot)$/,
				loader: 'file-loader'
			},
		]
	},
	devServer: {
		port: 8080
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['styles', 'vendor', 'vendorStyles', 'manifest']
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
};