// Synot Games - Bing Search Test 
import { test, expect} from '@playwright/test';
import { HomePage } from '../pages/homepage.js';



test('Bing Search returns results', async ({page}) => {
    
    // Launch the browser and create a new page
    const homePage = new HomePage(page);
    // Navigate to Bing
    await homePage.navigateTo('https://www.bing.com');

    // Check if the search input is visible
    await expect(homePage.searchInput).toBeVisible();
    
    //check if cookies are accepted
    await page.waitForTimeout(1000);
    await homePage.acceptCookies();
    
    // Perform a search       
    await homePage.performSearch('Synot games');
            
    // Check if the result page contains "SYNOT Games" homepage link
    await homePage.checkResultLink();
    

});