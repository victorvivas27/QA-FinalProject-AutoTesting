export default {
  testEnvironment: 'node',
  transform: {},
  testTimeout: 10000,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
