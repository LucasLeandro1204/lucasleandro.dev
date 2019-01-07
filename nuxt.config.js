const path = require('path');
const glob = require('glob-all');
const pkg = require('./package');
const PurgecssPlugin = require('purgecss-webpack-plugin');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

module.exports = {
  mode: 'universal',

  sitemap: {
    hostname: 'https://innboxhostels.com.br',
    generate: true,
    gzip: true,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Lucas Leandro Developer',

    htmlAttrs: {
      lang: 'pt-BR',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lucas Leandro - Developer Freelance' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
    extend(config, { isDev }) {
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
