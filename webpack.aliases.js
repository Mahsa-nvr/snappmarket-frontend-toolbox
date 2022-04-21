const path = require('path');
// const projectAliases = require(path.join(process.cwd(), 'internals/webpack/webpack.aliases.js'));

module.exports = {
  resolve: {
    alias: {
      '@template/internal': path.resolve(__dirname, './internal'),
      '@template/toolbox': path.resolve(__dirname, './toolbox/packages'),
      '@template/ducks': path.resolve(__dirname, './internal/ducks'),
      '@template/constants': path.resolve(__dirname, './internal/constants'),
      '@template/config': path.resolve(__dirname, './config.js'),
      '@template/hooks': path.resolve(__dirname, './hooks.js'),
      '@template/helpers': path.resolve(__dirname, './helpers.js'),
      '@template/ui': path.resolve(__dirname, './ui.js'),
      '@template/mobile-ui': path.resolve(__dirname, './internal/mobile-ui'),
      '@template/components': path.resolve(__dirname, './internal/components'),

      // ...projectAliases.resolve.alias,
    },
  },
};
