import { test, request } from '@playwright/test';
import { DogFactsRequest } from '../requests/dogFactsRequest.ts';

test('Dog API returns facts(validate structure)', async ({ request }) => {
    const dogAPI = new DogFactsRequest(request);
    await dogAPI.fetchRandomDogFact();
    await dogAPI.checkResponseStatus();
    await dogAPI.checkResponseBody();
    await dogAPI.checkFactDataStructure();
    await dogAPI.showDogFact();
    
});
