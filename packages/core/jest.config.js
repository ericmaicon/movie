const { join } = require('path');

const baseConfig = require('../../jest.config');
const pkg = require('./package.json');

delete baseConfig.projects;

module.exports = {
  ...baseConfig,
  displayName: pkg.name,
  testMatch: [join(__dirname, '**/*.test.{ts,tsx}')],
  moduleNameMapper: {
    '~/test/(.*)': '<rootDir>/test/$1',
    '~/(.*)': '<rootDir>/lib/$1',
  },
};
