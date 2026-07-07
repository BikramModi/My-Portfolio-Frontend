import nextJest from "next/jest.js";
import type { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Only run Jest test files
  testMatch: [
    "**/?(*.)+(test).[jt]s?(x)",
  ],

  // Ignore Playwright tests and build folders
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/tests/",      // Ignore Playwright tests folder
    "<rootDir>/playwright/", // Ignore if Playwright tests are here
    "\\.spec\\.[jt]sx?$",     // Ignore *.spec.ts and *.spec.tsx
  ],
};

export default createJestConfig(config);
