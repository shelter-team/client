module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/client/'
    : '/',

  pwa: {
    name: 'Shelter',

    // manifest
    manifestOptions: {
      display: 'standalone',
      background_color: '#42B883'
    },

    // workbox
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/sw.js',
    }
  }
}