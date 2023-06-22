module.exports = {
  roots: ['src'],

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    // '**/src/**/*.ts',
    // '**/src/main/**',
    // '**/src/**/*-protocols.ts',
    // '!**/protocols/**',
    // '!**/test/**',
    // 'src/**/*.ts',
    // '!src/**/index.ts',
    // '!src/presentation/controllers/signup/signup-protocols.ts',
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**'
  ],

  coverageDirectory: 'coverage',
  // testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
