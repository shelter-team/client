var testServer = 'https://stage.url';

module.exports = {
	lintOnSave: false,
	devServer: {
		port: 3500,
		https: true,
		proxy: {
			'/api': {
				target: testServer,
				changeOrigin: true,
			},
			'/static': {
				target: testServer,
				changeOrigin: true,
			},
		},
	},
};
