module.exports = {
  roots: ['src/'],

  collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/index.ts',
    '!src/presentation/controllers/signup/signup-protocols.ts'
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  testEnvironment: 'node',

  // A map from regular expressions to paths to transformers
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
