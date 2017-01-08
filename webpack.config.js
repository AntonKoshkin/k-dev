'use strict';

const production = process.env.NODE_ENV === 'production';

const webpack					= require('webpack');
const CleanWebpackPlugin	= require('clean-webpack-plugin');
const path						= require('path');
const ProgressBarPlugin		= require('progress-bar-webpack-plugin');
const CopyWebpackPlugin		= require('copy-webpack-plugin');
const HtmlWebpackPlugin		= require('html-webpack-plugin');
const FaviconWebpackPlugin	= require('favicons-webpack-plugin');

module.exports = {
	entry : {
		app: './src/app/app.ts',
		vendor: './src/app/vendor.ts',
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
					from: 'src/styles.css',
					to  : 'css/styles.css',
				}
			]
		),
		new HtmlWebpackPlugin({
			template: './src/index.jade',
		}),
		new FaviconWebpackPlugin({
			logo  : './src/img/header-logo.png',
			prefix: 'icons-[hash]/',
			title : 'K-DEV',
			icons: {
				android     : true,
				appleIcon   : true,
				appleStartup: true,
				coast       : true,
				favicons    : true,
				firefox     : true,
				opengraph   : true,
				twitter     : true,
				yandex      : true,
				windows     : true,
			},
		}),
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

		historyApiFallback: true,
	},
};
