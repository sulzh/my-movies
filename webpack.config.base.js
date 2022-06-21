const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(s(a|c)ss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
				loader: 'url-loader',
			},
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
