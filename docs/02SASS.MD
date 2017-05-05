# 2 Compilando SASS
1. Instalar las siguientes dependencias:
	* node-sass, compilador de sass.
	* style-loader, inyecta los estilos.
	* css-loader, inyecta los estilos desde css.
	* sass-loader, maneja archivos sass.
	* extract-text-webpack-plugin, convierte los estilos inyectados en un archivo css.
2. Configurar webpack:

Primero hay que importar los plugins que vamos a usar:
```javascript
const ExtractTextPlugin = require('extract-text-webpack-plugin');
```

Añadir entry point el punto de entrada del estilo (main.scss).
```javascript
	entry: {
		app: './src/main.js',
		styles: './src/content/main.scss'
	}
```
Añadir reglas para cargar el scss.

```javascript
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
	}
```

Añadir el entry point de los estilos dentro del plugin de common chunks.
```javascript
	new webpack.optimize.CommonsChunkPlugin({
		names: ['styles','manifest']
	})
```

Configurar el plugin de extract Text plugin, para sacar los estilos a un css.
```javascript
	new ExtractTextPlugin({
		filename: '[chunkhash].[name].css',
		allChunks: true
	})
```