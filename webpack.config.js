'use strict';

const production = process.env.NODE_ENV === 'production';

const webpack					= require('webpack');
const CleanWebpackPlugin	= require('clean-webpack-plugin');
const path						= require('path');
const ProgressBarPlugin		= require('progress-bar-webpack-plugin');
const CopyWebpackPlugin		= require('copy-webpack-plugin');

module.exports = {
	entry : {
		app: './src/app.ts',
		vendor: './src/vendor.ts',
	},
	output: {
		filename  : './js/[name].js',
		path      : path.join(__dirname, '/dist'),
	},

	displayOptions: {progress: true},

	watch       : !production,
	watchOptions: {aggregateTimeout: 300},
	debug       : !production,
	devtool     : !production ? 'cheap-inline-module-source-map' : 'hidden-source-map',

	resolve: {
		modulesDirectories: ['node_modules'],
		extensions        : ['', '.js', '.ts', '.tsx'],
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates   : ['*-loader', '*'],
		extensions        : ['', '.js', '.ts', '.tsx'],
	},

	module: {
		loaders: [
			{
				test   : /\.ts(x?)$/,
				exclude: /node_modules/,
				loader : 'babel!ts',
			},
			{
				test   : /\.styl$/,
				exclude: /node_modules/,
				loader : 'css!stylus',
			},
			{
				test   : /\.jade$/,
				exclude: /node_modules/,
				loader : 'jade',
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new ProgressBarPlugin(),
		new webpack.DefinePlugin({
			NODE_ENV  : JSON.stringify(process.env.NODE_ENV),
			production,
		}),
		new CopyWebpackPlugin(
			[
				{
					from: 'src/index.html',
					to  : 'index.html',
				},
				{
					from: 'node_modules/semantic-ui/dist/semantic.min.css',
					to  : 'css/semantic.min.css',
				},
				{
					from: 'src/styles.css',
					to  : 'css/styles.css',
				},
				{
					from: 'src/img/**/*.*',
					to  : 'img/[name].[ext]',
				}
			]
		),
		new webpack.NoErrorsPlugin(),
	],

	devServer: {
		host       : 'localhost',
		port       : 7777,
		contentBase: path.join(__dirname, '/dist'),
		publicPath : '/',
		// open       : true,
		inline     : true,
	// 	debug      : true,
		colors     : true,
		noInfo     : true,
	},
};
