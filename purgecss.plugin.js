const path = require('path');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = new PurgecssPlugin({
  paths: glob.sync([
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'src/**/*.vue'),
  ]),

  extractors: [
    {
      extractor: class TailwindExtractor {
        static extract (content) {
          return content.match(/[A-z0-9-:\/]+/g) || [];
        }
      },
      extensions: [
        'vue',
        'html',
      ],
    },
  ],
});
