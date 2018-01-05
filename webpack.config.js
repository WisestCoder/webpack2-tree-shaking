var webpack = require("webpack");
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	//插件项
	//页面入口文件配置
	entry: {
		foo:'./src/foo',
		bar:'./src/bar'
	},
	//入口文件输出配置
	output: {
		"path": __dirname + "/dist",
		filename: '[name].js'
	},
	module: {
		rules: [

		]
	},
	resolveLoader: {

	},
	resolve: {
		modules: [
	      './src',
	      "node_modules"
	    ],
		//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
		extensions: ['.js', '.json'],
		//模块别名定义，方便后续直接引用别名，无须多写长长的地址
		alias: {
			Util : 'src/util.js',
		}
	}
};