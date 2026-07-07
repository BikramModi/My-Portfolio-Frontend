import { test, expect } from "@playwright/test";

test("User can register, login and reach dashboard", async ({ page }) => {


    
    
await page.context().clearCookies();
  // Home
  await page.goto("http://localhost:3000");

  await expect(page).toHaveURL("/");

  // Go to Register
  await page.goto("/register");

  await expect(page).toHaveURL(/register/);



  // Fill registration form
  const random = Date.now();

  const email = `test${random}@gmail.com`;

 await page.locator("#name").fill("Playwright User");

await page.locator("#email").fill(email);

await page.locator("#password").fill("Password123!");

await page.locator("#confirmPassword").fill("Password123!");

  await page.getByRole("button", { name: /register/i }).click();

  // redirected to login
  await expect(page).toHaveURL(/login/);

  // Login
  await page.getByLabel("Email").fill(email);

  await page.getByLabel("Password").fill("Password123!");

  await page.getByRole("button", { name: /login/i }).click();

  // Dashboard
  await expect(page).toHaveURL(/dashboard/);

// User name should be visible
 await expect(
  page.getByRole("heading", {
    name: /Welcome, Playwright User/i,
  })
).toBeVisible();

  // Logout
  await page.getByRole("button", { name: /logout/i }).click();

  // Redirect to homepage
  await page.waitForURL("**/");

  await expect(page).toHaveURL("http://localhost:3000/");

});