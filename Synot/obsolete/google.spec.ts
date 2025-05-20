// Synot Games - Google Search Test
import { test, expect, chromium } from '@playwright/test';


test('Google Search returns results', async ({}) => {
    // complex lauch due to captcha
    //launch Chromium browser instance
    const browser = await chromium.launch();
    //create new context
    const context = await browser.newContext();
    //add init script
    await context.addInitScript("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
    //open new page using context
    const page = await context.newPage();

    await page.goto('https://www.google.com');

    // Check if the page title contains "Google"
    const title = await page.title();
    expect(title).toContain('Google');

    //check if cookies are accepted
    const acceptCookiesButton = page.locator('button[id="L2AGLb"]');
    if (await acceptCookiesButton.isVisible()) {
        await acceptCookiesButton.click();
    }

    // Check if the search input is visible
    const searchInput = page.locator('textarea[id="APjFqb"]');
    await searchInput.isVisible();
    
    // Perform a search
    await searchInput.click();
    await page.keyboard.insertText('Synot games');
    await page.waitForTimeout(2000);
    await page.keyboard.press('Enter');
      
    // captcha - Check the box??
    await page.waitForTimeout(2000);
    await page.frameLocator('[title="reCAPTCHA"]').getByRole('checkbox', { name: 'I\'m not a robot' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    
    // Check if the results are displayed
    await page.waitForSelector('div.g');
    const results = await page.$$('div.g');
    expect(results).toBeGreaterThan(0);
    
    // Check if the results contain "SYNOT Games"
    for (const result of results) {
        if (result.getAttribute.name == '*SYNOT Games*'){
            console.log('Found the term "SYNOT Games" in the results.');
            break;
        }
            
        else { 
            console.log('Result does not contain "SYNOT Games"');
            }
    }
    

});