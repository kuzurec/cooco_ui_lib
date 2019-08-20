const path = require('path');

module.exports={
	mode: 'production',
	entry:{
		main: './src/index.js'
	},
    externals: ["react","react-dom"],
    
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: 'cooco_ui_lib.js',
		libraryTarget: 'umd'
	},

	module:{
		rules: [
           {
           	  test: /\.js$/,
           	  exclude: /node_modules/,
           	  loader: 'babel-loader'
           },{
              test: /\.css$/,
              use:['style-loader','css-loader']
            }
		]
	}
}