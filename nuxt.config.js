const path = require('path');
const glob = require('glob-all');
const pkg = require('./package');
const PurgecssPlugin = require('purgecss-webpack-plugin');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
};

module.exports = {
  mode: 'universal',

  sitemap: {
    hostname: 'https://lucasleandro.dev',
    generate: true,
    gzip: true,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Lucas Leandro - Full stack Developer, Florianópolis - Brazil',

    htmlAttrs: {
      lang: 'pt-BR',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My name is Lucas Leandro, I\'m a Full Stack Developer from Florianópolis, Santa Catarina - Brazil. I solve problems that others don\'t.', },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/icon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'og:image', content: '/thumbnail.jpg' },
      { name: 'og:title', content: 'Lucas Leandro - Full Stack Developer, Florianópolis - Brazil' },
      { name: 'og:description', content: 'I\'m a Freelance Developer. I solve problems.' },
      { name: 'og:url', content: 'https://lucasleandro1204.dev' },
      { name: 'og:type', content: 'website', },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/icon/apple-icon-57x57.png', },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icon/apple-icon-60x60.png', },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icon/apple-icon-72x72.png', },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icon/apple-icon-76x76.png', },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/icon/apple-icon-114x114.png', },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icon/apple-icon-120x120.png', },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icon/apple-icon-144x144.png', },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icon/apple-icon-152x152.png', },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon/apple-icon-180x180.png', },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon/android-icon-192x192.png', },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon/favicon-32x32.png', },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icon/favicon-96x96.png', },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon/favicon-16x16.png', },
      { rel: 'manifest', href: '/manifest.json', },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700,800', },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',

    ['@nuxtjs/google-analytics', {
      id: 'UA-109495192-4',
    }],
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,

    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev }) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      });

      if (! isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            // purgecss configuration
            // https://github.com/FullHuman/purgecss
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue'),
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['vue'],
              },
            ],
            whitelist: ['html', 'body', 'nuxt-progress'],
          })
        );
      }
    }
  }
}
