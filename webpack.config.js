const path = require("path");

module.exports = {
	mode: "production",
	entry: "./lib/index.js",
	output: {
		clean: true,
		library: "Tapable",
		libraryTarget: "umd",
		filename: "tapable.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, "lib")],
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	}
};
