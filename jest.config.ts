module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/setup/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^client/(.+)$': '<rootDir>/src/client/$1',
    '^lib/(.+)$': '<rootDir>/src/lib/$1',
  },
  modulePathIgnorePatterns: [],
  setupFilesAfterEnv: ['<rootDir>/src/setup/test-setup.ts'],
  snapshotResolver: '<rootDir>/src/setup/snapshotResolver.js',
  collectCoverageFrom: ['src/client/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coverageReporters: ['lcov'],
  automock: false,
}
