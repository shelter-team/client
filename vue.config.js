module.exports = {
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