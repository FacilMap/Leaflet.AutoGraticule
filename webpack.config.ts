import { Configuration } from "webpack";

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env: any, argv: any): Configuration => {
	const isDev = argv.mode == "development";

	return {
		entry: `${__dirname}/src/L.AutoGraticule.ts`,
		output: {
			filename: "L.AutoGraticule.js",
			path: __dirname + "/dist/",
			library: ["L", "AutoGraticule"],
			libraryExport: "default",
			libraryTarget: "umd"
		},
		resolve: {
			extensions: [ ".js", ".ts" ]
		},
		mode: isDev ? "development" : "production",
		devtool: isDev ? "eval-cheap-source-map" : "source-map",
		module: {
			rules: [
				{
					resource: { and: [ /\.ts/, [
						__dirname + "/src/"
					] ] },
					loader: "ts-loader"
				},
				{
					test: /\.css$/,
					use: [ 'style-loader', 'css-loader' ]
				}
			]
		},
		externals : {
			leaflet: {
				commonjs: 'leaflet',
				commonjs2: 'leaflet',
				amd: 'leaflet',
				root: 'L'
			}
		},
		plugins: [
			//new BundleAnalyzerPlugin()
		],
		devServer: {
			publicPath: "/dist",
			disableHostCheck: true,
			injectClient: false // https://github.com/webpack/webpack-dev-server/issues/2484
		}
	};
};
