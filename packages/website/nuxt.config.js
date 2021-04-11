import { join } from 'path';

const i18n = ['nuxt-i18n', {
  seo: false,
  baseUrl: process.env.BASE_URL,

  locales: [
    {
      code: 'en',
      iso: 'en-US',
    },
    {
      code: 'br',
      iso: 'pt-BR',
      isCatchallLocale: true,
    },
  ],
  defaultLocale: 'br',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en: {
        welcome: 'Welcome',
      },
      fr: {
        welcome: 'Bienvenue',
      },
    },
  },
}];

export default {
  target: 'server',
  srcDir: join(__dirname, './src'),

  server: {
    port: 1176,
    host: 'localhost',
  },

  vite: {
    vue: {
    },
  },

  modules: [
    i18n,
  ],

  buildModules: [
    'nuxt-vite',
  ],
};
