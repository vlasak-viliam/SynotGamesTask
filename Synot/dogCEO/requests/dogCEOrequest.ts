import { APIRequestContext, expect, Page,chromium } from '@playwright/test';

export class DogCEORequest {
    private request: APIRequestContext;
    public responseBody: any;
    public responseStatus: number;
    public dogImageUrl: string;
    public dogIMGpage: Page;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async fetchRandomDogImage() {
        const response = await this.request.get('https://dog.ceo/api/breeds/image/random');
        this.responseStatus = response.status();
        this.responseBody = await response.json();
        this.dogImageUrl = this.responseBody.message;
    }

    async checkResponseStatus() {
        expect(this.responseStatus).toBe(200);
        console.log('Response status:', this.responseStatus);
    }

    async checkResponseBody() {
        expect(this.responseBody).toHaveProperty('message');
        expect(this.responseBody.message).toMatch(/https:\/\/images\.dog\.ceo\/.+\.jpg/);
        console.log('Dog img url:', this.responseBody.message);
    }
    async showDogImage() {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        this.dogIMGpage = await context.newPage();
        await this.dogIMGpage.goto(this.dogImageUrl);
    }
}

