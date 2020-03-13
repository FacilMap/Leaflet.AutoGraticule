const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
	const isDev = argv.mode == "development";

	return {
		entry: `${__dirname}/src/L.AutoGraticule.ts`,
		output: {
			filename: "L.AutoGraticule.js",
			path: __dirname + "/dist/",
			library: "L.AutoGraticule",
			libraryTarget: "umd"
		},
		resolve: {
			extensions: [ ".js", ".ts" ]
		},
		mode: isDev ? "development" : "production",
		devtool: isDev ? "cheap-eval-source-map" : "source-map",
		module: {
			rules: [
				{
					resource: { and: [ /\.ts/, [
						__dirname + "/src/"
					] ] },
					use: [
						/* {
							loader: "babel-loader",
							options: {
								presets: [
									[
										"@babel/preset-env",
										{
											useBuiltIns: "usage",
											corejs: 3
										}
									]
								]
							}
						}, */
						'ts-loader'
					]
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
			publicPath: "/dist"
		}
	};
};