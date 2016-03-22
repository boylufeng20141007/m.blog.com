/**
 * @author lux.lu
 * @date 2016-03-21
 * link http://www.tuicool.com/articles/BrAVv2y
 */
 'use strict';

 var path = require('path'),
 	 fs = require('fs');

 var webpack = require('webpack'),
 	 commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

	/*
	extract-text-webpack-plugin插件，
	有了它就可以将你的样式提取到单独的css文件里，
	妈妈再也不用担心样式会被打包到js文件里了。
	*/
 var ExtractWebpackPlugin = require('extract-text-webpack-plugin');

	/*
	html-webpack-plugin插件，重中之重，webpack中生成HTML的插件，
	具体可以去这里查看https://www.npmjs.com/package/html-webpack-plugin
	*/
 var HtmlWebpackPlugin = require('html-webpack-plugin');

 var debug = process.env.NODE_ENV !== 'prod'? true : false;

 var config = {
 	entry: {},//配置入口文件，有几个写几个;也可以动态遍历追加
 	output: {
 		path: path.join(__dirname, 'dest'),//输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
 		publicPath: '',//模板、样式、脚本、图片等资源对应的server上的路径
 		filename: '[name].entry.js',//每个页面对应的主js的生成配置
 		chunkFilename: '' //chunk生成的配置
 	},
 	resolve: {
 		extensions: ['', '.js', '.jsx', '.jpg', '.png', '.css', '.scss', '.less', 'tpl'],
 		alias: {
 			base: __dirname + 'src/base',
 			component: __dirname + '/src/component',
 			page: __dirname + '/src/page'
 		}
 	}
 	module: {
 		loaders: [
 			{test: /\.(js)$/, loader: 'jsx-loader?harmony'}
 		]
 	},
 	plugins: [commonsPlugin],
 	devServer: {
 		contentBase: 'src/',
 		host: 'localhost',
 		port: 9090,//默认8080
 		inline: true,//可以监控js变化
 		hot: true,//热启动
 	}
 };

 module.exports = config;