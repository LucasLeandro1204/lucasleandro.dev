import { join } from 'path';

export default {
  target: 'server',
  srcDir: join(__dirname, './src'),

  server: {
    port: 1176,
    host: 'localhost',
  },

  vite: {
    /* options for vite */
    vue: {
      /* options for vite-plugin-vue2 */
    },
  },

  buildModules: [
    'nuxt-vite'
  ],
};
