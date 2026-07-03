import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 30000,

  fullyParallel: true,

  retries: process.env.CI ? 2 : 0,

  reporter: [
    ["html"],
    ["list"],
  ],

  use: {
    baseURL: "http://localhost:3000",

    headless: true,

    trace: "on-first-retry",

    screenshot: "only-on-failure",

    video: "retain-on-failure",
  },

  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
  },

  projects: [
    {
      name: "Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});