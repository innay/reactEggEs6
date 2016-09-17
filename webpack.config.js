module.exports = {
	entry: './main.js',
	output: {
		path: './',
		fileName: 'index.js',
	},
	devServer: {
		contentBase: './',
		inline: true,
		progress: true,
		port: 3333
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}