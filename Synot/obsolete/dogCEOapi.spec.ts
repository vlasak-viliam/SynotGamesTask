import {test,expect} from '@playwright/test';

test('Dog CEO API returns image', async ({request}) => {
    // Make a request to the Dog CEO API
    const response = await request.get('https://dog.ceo/api/breeds/image/random');
    // Check if the response status is 200
    expect(response.status()).toBe(200);
    console.log('Response status:', response.status());
    // Check if the response body contains a valid image URL
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toMatch(/https:\/\/images\.dog\.ceo\/.+\.jpg/);
    console.log('Response body:', responseBody);
    // Check if the image URL is accessible
    const imageResponse = await request.get(responseBody.message);
    expect(imageResponse.status()).toBe(200);
    console.log('Image response status:', imageResponse.status());
    // Check if the image response is of type image/jpeg
    const contentType = imageResponse.headers()['content-type'];
    expect(contentType).toBe('image/jpeg');
    console.log('Image content type:', contentType);
    // Check if the image response body is not empty
    const imageBuffer = await imageResponse.body();
    expect(imageBuffer.length).toBeGreaterThan(0);
    console.log('Image response body length:', imageBuffer.length);
       
});
