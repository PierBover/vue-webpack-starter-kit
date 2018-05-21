const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

const environmentConfig = require(`../environments/${process.env.ENVIRONMENT}.js`);

const ENTRY = './src/main.js';
const OUTPUT = path.resolve(__dirname, '../deploy/public');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: ENTRY,
	output: {
		path: OUTPUT,
		filename: 'js/[hash].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'components': path.resolve(__dirname, '../src/components'),
			'modules': path.resolve(__dirname, '../src/modules'),
			'store': path.resolve(__dirname, '../src/modules/store'),
			'router': path.resolve(__dirname, '../src/modules/router')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				enforce: 'pre',
				options: {
					formatter: require('eslint-friendly-formatter'),
					emitError: true,
					emitWarning: true,
					failOnError: true
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						scss: 'vue-style-loader!css-loader!sass-loader'
					}
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: false,
							includePaths: [path.resolve(__dirname,'node_modules')],
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'assets/[hash].[ext]'
						}
					}
				]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			hash: false,
			template: './src/index.html',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[hash].css',
			chunkFilename: '[id].css'
		}),
		new webpack.DefinePlugin({
			'process.env': environmentConfig
		})
	]
};
