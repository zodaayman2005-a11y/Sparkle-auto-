import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  // The single-page scroll/chapter suites describe the retired page structure.
  testMatch: "website.spec.ts",
  timeout: 45000,
  expect: { timeout: 10000 },
  fullyParallel: true,
  workers: 2,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3100",
    headless: true,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  outputDir: "test-results",
});
