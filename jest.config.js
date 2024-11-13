// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"], // Path to setup file for MongoDB in-memory server
  testMatch: ["<rootDir>/tests/**/*.test.ts"], // Match test files in tests directory
  moduleFileExtensions: ["ts", "js"], // Include TypeScript and JavaScript files
};
