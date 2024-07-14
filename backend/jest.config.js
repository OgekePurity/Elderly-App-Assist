module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
