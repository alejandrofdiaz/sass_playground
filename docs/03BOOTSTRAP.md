# Configurar Bootstrap
1. Instalar las siguientes dependencias:
 - jquery
 - bootstrap-sass
 - [bootstrap-loader](https://github.com/shakacode/bootstrap-loader)
 - resolve-url-loader
 - url-loader
 - sass-resources-loader
 - file-loader

 2. Crear [archivo](https://raw.githubusercontent.com/shakacode/bootstrap-loader/master/.bootstraprc-3-default) de configuración de bootstrap loader: 
  * Modificar la ruta de las variables preconfiguradas a la nuestra.

 3. Crear archivos dentro de /src/content/sass/bootsrtap:
  * Resources, donde se van a importar tanto las variables como los mixins de bootstrap.
  * Variables, copia del archivo _variables dentro de bootstrap-sass, es el que vamos a utilizar para sobreescribit bootstrap con nuestras propias variables.

  4. Configurar webpack:
   * Añadir jquery al entry/vendor
   * Añadir bootstrap-loader al entry/vendor-styles.
   * Añadir los loader de los iconos:

   ```javascript
   		{
			test: /\.(woff2?|svg)$/,
			loader: 'url-loader?limit=10000'
		},
		{
			test: /\.(ttf|eot)$/,
			loader: 'file-loader'
		}
   ```
   * Añadir el loader sass-resources-loader, este loader permite que podamos importar los mixins de boostrap dentro de nuestra hoja "main".

   ```javascript
			{
				loader: 'sass-resources-loader',
				options: {
						resources: [
							'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_mixins',
							'src/content/sass/bootstrap/_variables.scss'
						]
				}
			}
   ```

   * Añadir Jquery como variables globales.
   	```javascript
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
	```