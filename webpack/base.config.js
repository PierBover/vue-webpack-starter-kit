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
			'services': path.resolve(__dirname, '../src/services'),
			'store': path.resolve(__dirname, '../src/services/store'),
			'router': path.resolve(__dirname, '../src/services/router')
		}
	},
	module: {
		rules: [
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
						loader: 'sass-loader'
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
