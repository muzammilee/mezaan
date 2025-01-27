const path = require('path');

module.exports = function override(config, env) {
  // Add polyfills to Webpack config
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve('path-browserify'),
    os: require.resolve('os-browserify/browser'),
    crypto: require.resolve('crypto-browserify'),
  };
  return config;
};
