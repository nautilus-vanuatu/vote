const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@monorepo-vote/components',
  '@monorepo-vote/redux-store',
  '@monorepo-vote/util',
]);

module.exports = withPlugins([
  withTM,
]);
