var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = [{
	entry: {
		bar:'./src/bar'
	},
	output: {
		"path": __dirname + "/dist2",
		filename: '[name].js'
	},
	module: {
		rules: [

		]
	},
	resolveLoader: {

	},
	plugins: [
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
		})
	],
	resolve: {
		modules: [
	      './src',
	      "node_modules"
	    ],
		extensions: ['.js', '.json'],
		alias: {
			Util : 'src/util.js',
		}
	}
},
{
	entry: {
		foo:'./src/foo'
	},
	//入口文件输出配置
	output: {
		"path": __dirname + "/dist2",
		filename: '[name].js'
	},
	module: {
		rules: [

		]
	},
	resolveLoader: {

	},
	plugins: [
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
		})
	],
	resolve: {
		modules: [
	      './src',
	      "node_modules"
	    ],
		extensions: ['.js', '.json'],
		alias: {
			Util : 'src/util.js',
		}
	}
}];