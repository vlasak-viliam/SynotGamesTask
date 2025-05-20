import { test, request } from '@playwright/test';
import { DogCEORequest } from '../requests/dogCEOrequest.ts';

test('Dog CEO API returns a random dog image', async ({ request }) => {
    const dogAPI = new DogCEORequest(request);
    await dogAPI.fetchRandomDogImage();
    await dogAPI.checkResponseStatus();
    await dogAPI.checkResponseBody();
    await dogAPI.showDogImage();
});
