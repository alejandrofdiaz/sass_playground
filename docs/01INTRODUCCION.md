### 1 Configurar herramientas de build.
[Link Commit](https://github.com/alejandrofdiaz/sass_playground/commit/663b0253fd2555d87e070b11a3be475b3f669e11)

1. Crear package.json e instalar las siguientes dependencias:
	* webpack
	* webpack-dev-server
	* html-webpack-plugin

2. Crear archivo de configuración de Webpack (webpack.config.json):

```javascript
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
```

3. Crear SRC y sus archivos:
	* index.html
	* main.js