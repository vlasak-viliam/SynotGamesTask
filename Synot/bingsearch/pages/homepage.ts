import {Page, test, expect} from '@playwright/test';



export class HomePage {
    searchInput: any;
    searchButton: any;
    acceptCookiesButton: any;
    resultLink: any;
    
  constructor(private page: Page) {
    this.searchInput = this.page.locator('textarea[id="sb_form_q"]');
    this.acceptCookiesButton = this.page.locator('#bnp_btn_accept');
    this.resultLink = this.page.getByRole('link', { name: "Homepage - SYNOT Games" });
  }
    async navigateTo(url: string) {
        await this.page.goto(url);
    }
    
    async performSearch(string: string) {
        await this.searchInput.click();
        await this.page.keyboard.insertText(string);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('Enter');
    }
    async acceptCookies() {
        if (await this.acceptCookiesButton.isVisible()) {
            await this.acceptCookiesButton.click();
        }
    }
    async checkResultLink() {
        await expect(this.resultLink).toBeVisible();
        console.log('Found the "SYNOT Games" in the results.');
    }


}