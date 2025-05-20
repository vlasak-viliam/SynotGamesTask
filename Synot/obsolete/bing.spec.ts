// Synot Games - Bing Search Test 
import { test, expect} from '@playwright/test';


test('Bing Search returns results', async ({page}) => {

    await page.goto('https://www.bing.com');

    // Check if the page title contains "Bing"
    const title = await page.title();
    expect(title).toContain('Bing');

    // Check if the search input is visible
    const searchInput = page.locator('textarea[id="sb_form_q"]');
    await expect(searchInput).toBeVisible();
    
    // Perform a search
    await searchInput.click();
    await page.keyboard.insertText('Synot games');
    await page.waitForTimeout(2000);
    await page.keyboard.press('Enter');
    
    //check if cookies are accepted
    await page.waitForTimeout(3000);
    const acceptCookiesButton = page.locator('#bnp_btn_accept');
    if (await acceptCookiesButton.isVisible()) {
        await acceptCookiesButton.click();
    }
    
    // Check if the results contain "SYNOT Games" homepage link
    const SynotLink = page.getByRole('link', { name: "Homepage - SYNOT Games" })
    await expect(SynotLink).toBeVisible();
    console.log('Found the "SYNOT Games" in the results.');


});