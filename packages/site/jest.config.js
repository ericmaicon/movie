const { join } = require('path');

const baseConfig = require('../../jest.config');
const pkg = require('./package.json');

delete baseConfig.projects;

module.exports = {
  ...baseConfig,
  displayName: pkg.name,
  testMatch: [join(__dirname, '**/*.test.{ts,tsx}')],
  moduleNameMapper: {
    '~/themes/(.*)': '<rootDir>/../../themes/$1',
    '~/test/(.*)': '<rootDir>/test/$1',
    '~/(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: [join(__dirname, 'test/config/jest.setup.ts')],
};
