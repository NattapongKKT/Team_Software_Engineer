import { test, expect } from '@playwright/test';
//----------------------Home page Test---------------------------//
test('TC01', async ({ page }) => {
    //test case 01 switch TH TO EN 
    await page.goto('http://localhost:8080/th/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/us/');
});

test('TC02', async ({ page }) => {
    //test case 02 switch TH TO ID 
    await page.goto('http://localhost:8080/th/');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/id/');
});
//-------------------------------------------------------------//
test('TC03', async ({ page }) => {
    //test case 03 invalid test Click US but go to page ID
    await page.goto('http://localhost:8080/th/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/id/');
});

test('TC04', async ({ page }) => {
    //test case 03 invalid test Click ID but go to page US
    await page.goto('http://localhost:8080/th/');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/us/');
});
//-------------------------------------------------------------//

test('TC05', async ({ page }) => {
    //test case 05 switch EN TO TH 
    await page.goto('http://localhost:8080/us/');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/th/');
});

test('TC06', async ({ page }) => {
    //test case 06 switch EN TO ID 
    await page.goto('http://localhost:8080/us/');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/id/');
});
//-------------------------------------------------------------//

test('TC07', async ({ page }) => {
    //test case 07 invalid test Click TH but go to page ID
    await page.goto('http://localhost:8080/us/');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/id/');
});

test('TC08', async ({ page }) => {
    //test case 08 invalid test Click ID but go to page TH  
    await page.goto('http://localhost:8080/us/');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/th/');
});

//-------------------------------------------------------------//
test('TC09', async ({ page }) => {
    //test case 09 switch ID TO TH 
    await page.goto('http://localhost:8080/id/');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/th/');
});

test('TC10', async ({ page }) => {
    //test case 10 switch ID TO US 
    await page.goto('http://localhost:8080/id/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/us/');
});

//-------------------------------------------------------------//
test('TC11', async ({ page }) => {
    //test case 11 invalid test Click ID but go to page TH  
    await page.goto('http://localhost:8080/id/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/th/');
});

test('TC12', async ({ page }) => {
    //test case 12 invalid test Click TH but go to page US
    await page.goto('http://localhost:8080/id/');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/us/');
});
//----------------------Product page Test---------------------------//
test('TC13', async ({ page }) => {
    //test case 13 switch TH TO EN 
    await page.goto('http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/us/home/22-limited-cs-pencil-collection-2024.html');
});

test('TC14', async ({ page }) => {
    //test case 14 switch TH TO ID 
    await page.goto('http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html');
});
//-------------------------------------------------------------//
test('TC15', async ({ page }) => {
    //test case 15 invalid test Click US but go to page ID
    await page.goto('http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html');
});

test('TC16', async ({ page }) => {
    //test case 16 invalid test Click ID but go to page US
    await page.goto('http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/us/home/22-limited-cs-pencil-collection-2024.html');
});
//-------------------------------------------------------------//

test('TC17', async ({ page }) => {
    //test case 17 switch EN TO TH 
    await page.goto('http://localhost:8080/us/home/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html');
});

test('TC18', async ({ page }) => {
    //test case 18 switch EN TO ID 
    await page.goto('http://localhost:8080/us/home/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html/');
});
//-------------------------------------------------------------//

test('TC19', async ({ page }) => {
    //test case 19 invalid test Click TH but go to page ID
    await page.goto('http://localhost:8080/us/home/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html');
});

test('TC20', async ({ page }) => {
    //test case 20 invalid test Click ID but go to page TH  
    await page.goto('http://localhost:8080/us/home/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html');
});

//-------------------------------------------------------------//
test('TC21', async ({ page }) => {
    //test case 21 switch ID TO TH 
    await page.goto('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html');
});

test('TC22', async ({ page }) => {
    //test case 22 switch ID TO US 
    await page.goto('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/us/home/22-limited-cs-pencil-collection-2024.html');
});

//-------------------------------------------------------------//
test('TC23', async ({ page }) => {
    //test case 23 invalid test Click ID but go to page TH  
    await page.goto('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html');
});

test('TC24', async ({ page }) => {
    //test case 24 invalid test Click TH but go to page US
    await page.goto('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/us/home/22-limited-cs-pencil-collection-2024.html');
});

//----------------------Page 3 Test---------------------------//
