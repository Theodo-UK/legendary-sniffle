// jest.config.mjs
import nextJest from 'next/jest.js';

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './',
});
const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test))\\.(jsx?|js?|tsx?|ts?)$';

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  rootDir: '.',
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  testRegex: TEST_REGEX,
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
