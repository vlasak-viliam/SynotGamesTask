# SynotGamesTask
Assignment for Synot Games job inteview

Welcome!
Hope this doesn't take you too long :)

Whole repository can be pulled at once, as I used Playwright for all 3 tasks. More detailed guide can be found in the section below.

Repository contains 3 tasks:
1. UI Automation - Perform a Google Search for the term "synot games".
Covered in "bingsearch" folder - https://github.com/vlasak-viliam/SynotGamesTask/tree/master/Synot/bingsearch
Initially, I started with google search, but I couldn't get past CAPTCHA. Some code can be found in - https://github.com/vlasak-viliam/SynotGamesTask/blob/master/Synot/obsolete/google.spec.ts

2. API Automation For Dog CEO API - verify:
A successful response (200 OK) from the https://dog.ceo/api/breeds/image/random endpoint.
The response contains a valid image URL
My solution can be found here - https://github.com/vlasak-viliam/SynotGamesTask/tree/master/Synot/dogCEO

3. For Free Public APIs, choose one API from the list and:
Make a GET request to an endpoint. Validate the structure and content of the response.

I chose the dog facts endpoint (https://dogapi.dog/api/v2/facts) of https://dogapi.dog/docs/api-v2 
The solution can be found here - https://github.com/vlasak-viliam/SynotGamesTask/tree/master/Synot/dogFacts 


How to run the tests / Dependencies / environment setup (sorry windows only):
1. install node.js - https://nodejs.org/dist/v22.15.1/node-v22.15.1-x64.msi
2. install git
3. pull the whole repository into some folder on your harddrive (ie c:\playwright) 
4. install playwright
   - open windows powershell as admin
   - navigate to playwright folder - cd c:\playwright\
   - type the command Set-ExecutionPolicy remotesigned
   - install playwright using command - npm init playwright@latest
5. run UI mode of playwright from playwright directory - npx playwright test --ui
6. navigate to coresponding tests in the tree structure
7. click on the green "Run" button
8. results can be seen in the right part of the window, with some additional info (or errors :) ) in the console section
9. I know this is not 100% accurate, but hope it's enough.
10. Have a nice day!
 
