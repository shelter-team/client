const testServer = 'http://stage.url'
const publicPath = '/'
const devPath = '/'

module.exports = {
	devServer: {
		port: 3500,
		proxy: {
			'/api': {
				target: testServer,
				changeOrigin: true,
			},
		},
	}, 

	publicPath: process.env.NODE_ENV === 'production'
		? publicPath
		: devPath,

	pwa: {
      name: 'Shelter',
      manifestOptions: {
        display: 'fullscreen',
        backgroundColor: '#707580',
        background_color: '#F5A623'
      },
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'src/sw.js'
      },
      themeColor: '#F5A623',
      msTileColor: '#F5A623'
    }
}