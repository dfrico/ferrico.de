/* eslint-disable */
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

if(process.env.NODE_ENV !== 'production') {
	console.log("If you want to build in production do:\n\t NODE_ENV='production' webpack -p");
}

var config = {
	entry: {
		app: "./src/main.js",
		vendor: [
			"react", "react-dom"
		]
	},
	output: {
		path: "./build/",
		filename: "[name].bundle.js",
		libraryTarget: "var",
		library: "[name]"
	},
	devtool: 'source-map',
	resolve: {
		extensions: ["", ".webpack.js", ".js", ".jsx"]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(["vendor"], "vendor.bundle.js")
	],
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", query: {presets:['es2015','react']}}
		]
	}
};

if(process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		})
	)
}

module.exports = config;
