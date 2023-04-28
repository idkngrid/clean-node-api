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

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  testEnvironment: 'node',

  // A map from regular expressions to paths to transformers
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
