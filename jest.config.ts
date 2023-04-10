export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  roots: ['<rootDir>/src/', '<rootDir>'],
  moduleNameMapper: {
    '^rules/(.*)$': '<rootDir>/src/rules/$1',
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^models/(.*)$': '<rootDir>/src/models/$1',
    '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
  },
  testMatch: [
    '**/__tests__/**/*.test.{js,jsx,ts,tsx}',
    '**/?(*.)+(spec|test).{js,jsx,ts,tsx}',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
}
