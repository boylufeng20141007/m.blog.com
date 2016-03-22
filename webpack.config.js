/**
 * @author lux.lu
 * @date 2016-03-21
 * link http://www.tuicool.com/articles/BrAVv2y
 */
 'use strict';

 var webpack = require('webpack'),
 	 commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

 module.exports = {
 	entry: {
 		entry1: './entry/entry1.js',
 		entry2: './entry2/entry2.js'
 	},
 	output: {
 		path: __dirname,
 		filename: '[name].entry.js'
 	},
 	resolve: {
 		extensions: ['', '.js', '.jsx']
 	}
 	module: {
 		loaders: [
 			{test: /\.(js)$/, loader: 'jsx-loader?harmony'}
 		]
 	},
 	plugins: [commonsPlugin]
 };