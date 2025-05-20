import {test,expect} from '@playwright/test';

test('Dog API returns facts(validate structure)', async ({request}) => {
    // Make a request to the Dog API v2 for facts
    const response = await request.get('https://dogapi.dog/api/v2/facts');
    // Check if the response status is 200
    expect(response.status()).toBe(200);
    console.log('Response status:', response.status());
    // Check if the response body contains a valid JSON structure
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('data');
    expect(responseBody.data).toBeInstanceOf(Array);
    expect(responseBody.data.length).toBeGreaterThan(0);
    // Check if the first item in the data array has the expected structure
    const firstItem = responseBody.data[0];
    expect(firstItem).toHaveProperty('id');
    expect(firstItem).toHaveProperty('type');
    expect(firstItem).toHaveProperty('attributes');
    expect(firstItem.attributes).toHaveProperty('body');
    // Check if the fact body is a not empty
    expect(firstItem.attributes.body.length).toBeGreaterThan(0);
    // Check if the type equals 'fact'
    expect(firstItem.type).toBe('fact');
    // log the fact body to the console
    console.log('Fact:', firstItem.attributes.body);
   
       
});
