import { APIRequestContext, expect, Page,chromium } from '@playwright/test';

export class DogFactsRequest {
    private request: APIRequestContext;
    public responseBody: any;
    public responseStatus: number;
    public firstItem: any;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async fetchRandomDogFact() {
        const response = await this.request.get('https://dogapi.dog/api/v2/facts');
        this.responseStatus = response.status();
        this.responseBody = await response.json();
        
    }

    async checkResponseStatus() {
        expect(this.responseStatus).toBe(200);
        console.log('Response status:', this.responseStatus);
    }

    async checkResponseBody() {
        expect(this.responseBody).toHaveProperty('data');
        expect(this.responseBody.data).toBeInstanceOf(Array);
        expect(this.responseBody.data.length).toBeGreaterThan(0);
    }
    async checkFactDataStructure() {
        this.firstItem = this.responseBody.data[0];
        expect(this.firstItem).toHaveProperty('id');
        expect(this.firstItem).toHaveProperty('type');
        expect(this.firstItem).toHaveProperty('attributes');
        expect(this.firstItem.attributes).toHaveProperty('body');
        expect(this.firstItem.attributes.body.length).toBeGreaterThan(0);
        expect(this.firstItem.type).toBe('fact');

    }
    async showDogFact() {
        console.log('Dog fact:', this.firstItem.attributes.body);
    }   

}

