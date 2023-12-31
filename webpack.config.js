const config = {
	mode: 'production',
	entry: {
		index: './src/parts/index.js',
		//contacts: './src/parts/contacts.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},			
		],
	},
};

module.exports = config;