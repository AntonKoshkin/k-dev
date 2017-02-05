'use strict';

const production = process.env.NODE_ENV === 'production';

const CleanWebpackPlugin			= require('clean-webpack-plugin');
const CopyWebpackPlugin				= require('copy-webpack-plugin');
const HtmlWebpackPlugin				= require('html-webpack-plugin');
const FaviconWebpackPlugin			= require('favicons-webpack-plugin');
const path								= require('path');
const ProgressBarPlugin				= require('progress-bar-webpack-plugin');
const ResourceHintWebpackPlugin	= require('resource-hints-webpack-plugin');
const webpack							= require('webpack');

module.exports = {
	entry: {
		'js/app': './src/app/app.ts',
	},
	output: {
		filename: '[name].[hash].js',
		path    : './dist/',
	},

	displayOptions: {progress: true},

	watch       : !production,
	watchOptions: {aggregateTimeout: 300},
	debug       : !production,
	devtool     : !production ? 'cheap-inline-module-source-map' : 'hidden-source-map',

	resolve: {
		modulesDirectories: ['node_modules'],
		extensions        : ['', '.js', '.ts', '.jade', '.styl', '.css'],
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates   : ['*-loader', '*'],
		extensions        : ['', '.js', '.ts', '.jade', '.styl', '.css'],
	},

	module: {
		preLoaders: [
			{
				test  : /\.ts$/,
				loader: 'tslint',
			}
		],
		loaders: [
			{
				test   : /\.ts$/,
				exclude: /node_modules/,
				loader : 'babel!ts',
			}, {
				test   : /\.styl$/,
				exclude: /(node_modules|style\.styl)/,
				loader : 'css!postcss!stylus',
			}, {
				test   : /\.css/,
				loader : 'style!css',
			}, {
				test   : /\.jade$/,
				exclude: /node_modules/,
				loader : 'jade?pretty=true',
			}, {
				test   : /style\.styl$/,
				exclude: /node_modules/,
				loader : 'style!css!postcss!stylus',
			}
		],
	},

	plugins: [
		new ProgressBarPlugin(),
		new CleanWebpackPlugin(['dist']),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(process.env.NODE_ENV),
			production,
		}),
		new HtmlWebpackPlugin({
			template: './src/index.jade',
			prefetch: ['**/*.*'],
			preload : ['**/*.*'],
			// filename: 'dist/index.html',
		}),
		new ResourceHintWebpackPlugin(),
		new FaviconWebpackPlugin({
			logo  : './src/img/header-logo.png',
			prefix: 'icons-[hash]/',
			title : 'K-DEV',
			icons : {
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
		new CopyWebpackPlugin(
			[
				{
					from: 'src/app/components/home-page/social.svg',
					to  : 'img/[name].svg',
				}
			]
		),
		new webpack.NoErrorsPlugin()
	],

	tslint: {
		configuration: {rules: {quotemark: [true, 'single']}},
		typeCheck    : true,
		configFile   : 'tslint.json',
		emitErrors   : false,
		failOnHint   : false,
	},

	devServer: {
		host       : 'localhost',
		port       : 7777,
		contentBase: path.join(__dirname, '/dist'),
		publicPath : '/',
		open       : false,
		inline     : true,
	// 	debug      : true,
		colors     : true,
		noInfo     : true,

		historyApiFallback: true,
	},
};
