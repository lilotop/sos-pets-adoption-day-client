module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/sos-pets-adoption-day-client/'
        : '/',

    pluginOptions: {
      quasar: {
        importStrategy: 'kebab',
        rtlSupport: true
      }
    },

    transpileDependencies: [
      'quasar'
    ]
};
