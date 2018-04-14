const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const DEBUG = process.env.DEBUG === 'true';

if (DEBUG) console.log('\nBuilding in DEBUG mode\n');

const pathsToClean = ['deploy/public'];

const cleanOptions = {
	root:     path.resolve('./'),
	verbose:  false,
	dry:      false
}

const buildConfig = {
	stats: {
		all: DEBUG,
		builtAt: true,
		colors: true,
		hash: true,
		performance: true,
		warnings: true
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: DEBUG,
				uglifyOptions: {
					compress: {
						drop_console: !DEBUG
					}
				}
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		new CleanWebpackPlugin(pathsToClean, cleanOptions),
		new Visualizer({
			filename: '../../build-report.html'
		})
	],
	devtool: '#source-map'
};

module.exports = merge(baseConfig, buildConfig);
