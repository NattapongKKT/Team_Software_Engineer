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
    //test case 03 invaid test Click US but go to page ID
    await page.goto('http://localhost:8080/th/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/id/');
});

test('TC04', async ({ page }) => {
    //test case 03 invaid test Click ID but go to page US
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
    //test case 07 invaid test Click TH but go to page ID
    await page.goto('http://localhost:8080/us/');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/id/');
});

test('TC08', async ({ page }) => {
    //test case 08 invaid test Click ID but go to page TH  
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
    //test case 11 invaid test Click ID but go to page TH  
    await page.goto('http://localhost:8080/id/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/th/');
});

test('TC12', async ({ page }) => {
    //test case 12 invaid test Click TH but go to page US
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
    //test case 15 invaid test Click US but go to page ID
    await page.goto('http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html');
});

test('TC16', async ({ page }) => {
    //test case 16 invaid test Click ID but go to page US
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
    //test case 19 invaid test Click TH but go to page ID
    await page.goto('http://localhost:8080/us/home/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html');
});

test('TC20', async ({ page }) => {
    //test case 20 invaid test Click ID but go to page TH  
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
    //test case 23 invaid test Click ID but go to page TH  
    await page.goto('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html');
});

test('TC24', async ({ page }) => {
    //test case 24 invaid test Click TH but go to page US
    await page.goto('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/us/home/22-limited-cs-pencil-collection-2024.html');
});

//---------------------- Page 3 Test  ---------------------------//

test('TC25', async ({ page }) => {
    //test case 25 test Check US language Clothes
    await page.goto('http://localhost:8080/th/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/us/');
    const element = await expect(page.getByText('Clothes')).toBeVisible() //Check Text "Clothes" in page us 
    
});

test('TC26', async ({ page }) => {
    //test case 26 test Check US language Accessories
    await page.goto('http://localhost:8080/th/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/us/');
    const element = await expect(page.getByText('Accessories')).toBeVisible() //Check Text "Accessories" in page us 
});


test('TC27', async ({ page }) => {
    //test case 27 invalid test Check Click ปากกาลิมิเต็ด รุ่นปี2024
    await page.goto('http://localhost:8080/th/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/us/');
    await page.click('text=ปากกาลิมิเต็ด รุ่นปี2024'); // Can't click because the language has been changed.
    expect(page.url()).toBe('http://localhost:http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html/us/'); 
    //Check Result after click ปากกาลิมิเต็ด รุ่นปี2024
});

test('TC28', async ({ page }) => {
    //test case 28 test Check Text "Popular Products" 
    //And after change language can click for check detail.
    await page.goto('http://localhost:8080/th/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/us/');
    const element = await expect(page.getByText('Popular Products')).toBeVisible() //Check Text "Popular Products" in page us 
    await page.click('text=Thermal Flask 360ml');
    expect(page.url()).toBe('http://localhost:8080/us/home/28-thermal-flask-360ml.html'); //For Check after chenge language Can click for Check Detail

});

test('TC29', async ({ page }) => {
    //test case 29 invalid test Check Indonesian language Accessories
    await page.goto('http://localhost:8080/th/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/us/');
    const element = await expect(page.getByText('SELAMAT DATANG DI KULIAH KOMPUTING UNIVERSITAS')).toBeVisible() //Check Text "SELAMAT DATANG DI KULIAH KOMPUTING UNIVERSITAS" in page us
    // Not have text "SELAMAT DATANG DI KULIAH KOMPUTING UNIVERSITAS"  because it was not changed to Indonesian
});

test('TC30', async ({ page }) => {
    //test case 30 test Check All product page
    await page.goto('http://localhost:8080/th/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/us/');
    const element1 = await expect(page.getByText('All products')).toBeVisible() //Check Text "All products" in page us 
    await page.click('text=All products'); 
    expect(page.url()).toBe('http://localhost:8080/us/2-home'); //Check Page go to All products
    const element2 = await expect(page.getByText('Subcategories')).toBeVisible() //Check Text Subcategories.
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/th/2-hna-hlak'); //Check if you can change to Thai when you come to the all products page.
    const element3 = await expect(page.getByText('หมวดย่อย')).toBeVisible()// Check text Form Subcategories to หมวดย่อย
});

test('TC31', async ({ page }) => {
    //test case 31 test Check ID language All element in Page ID 
    await page.goto('http://localhost:8080/th/');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/id/');
    const element1 = await expect(page.getByText('Pakaian')).toBeVisible() //Check Text "Pakaian" in page id  
    //const element2 = await expect(page.getByText('Aksesoris')).toBeVisible()
    const element3 = await expect(page.getByText('Populer')).toBeVisible() //Check Text "Populer" in page id  
    const element4 = await expect(page.getByText('Koleksi Pena CS Terbatas 2024')).toBeVisible() //Check Text "Koleksi Pena CS Terbatas 2024" in page id  
    const element5 = await expect(page.getByText('Labu Termal 360ml')).toBeVisible() //Check Text "Labu Termal 360ml" in page id  
    const element6 = await expect(page.getByText('Tas Ilmu Komputer')).toBeVisible() //Check Text "Tas Ilmu Komputer" in page id  
    const element7 = await expect(page.getByText('Flash Disk')).toBeVisible() //Check Text "Flash Disk" in page id  
    const element8 = await expect(page.getByText('Semua produk')).toBeVisible() //Check Text "Semua produk" in page id  
    const element9 = await expect(page.getByText('SELAMAT DATANG DI KULIAH KOMPUTING UNIVERSITAS')).toBeVisible() //Check Text "SELAMAT DATANG DI KULIAH KOMPUTING UNIVERSITAS" in page id  
    const element10 = await expect(page.getByText('KHON KAEN AKSESORIS RUMAH')).toBeVisible() //Check Text "KHON KAEN AKSESORIS RUMAH" in page id  
});


test('TC32', async ({ page }) => {
    //test case 32 test Check ID language Accessories
    await page.goto('http://localhost:8080/th/'); //expect.toBeVisible with timeout 5000ms
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/id/');
    const element = await expect(page.getByText('Aksesoris')).toBeVisible() //expect.toBeVisible with timeout 5000ms waiting for getByText('Aksesoris')
    //Not Check Becuase No run (Fail) 

});

test('TC33', async ({ page }) => {
    //test case 33 test Check Th language Add Products
    await page.goto('http://localhost:8080/th/');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/id/');
    const element = await expect(page.getByText('Bahasa Indonesia')).toBeVisible() //Check Text "Bahasa Indonesia" in page ID
    await page.click('text=Tas Ilmu Komputer'); //Click for go to Detail Page 
    expect(page.url()).toBe('http://localhost:8080/id/beranda/30-cs-bag.html');
    const element2 = await expect(page.getByText('Beli')).toBeVisible() //Check Text "Beli" in Detail page ID 
    await page.click('text=English');  //switch to us page 
    expect(page.url()).toBe('http://localhost:8080/us/home/30-cs-bag.html');
    const element3 = await expect(page.getByText('Add to cart')).toBeVisible() //Chack Text Form "Beli" to "Add to cart"
    await page.click('text=ภาษาไทย'); //switch to th page 
    expect(page.url()).toBe('http://localhost:8080/th/hna-hlak/30-cs-bag.html');
    const element4 = await expect(page.getByText('หยิบใส่ตะกร้า')).toBeVisible() //Chack Text Form "Add to cart" to "หยิบใส่ตะกร้า"
    await page.click('text=หยิบใส่ตะกร้า'); //After Click page goto 'สินค้าได้ถูกเพิ่มไปยังตะกร้าสินค้าของคุณแล้ว'
   //Check text for Result is Thai language
    const element5 = await expect(page.getByText('สินค้าได้ถูกเพิ่มไปยังตะกร้าสินค้าของคุณแล้ว')).toBeVisible() 
    const element6 = await expect(page.getByText('มี 1 รายการในตะกร้าของคุณ')).toBeVisible()
    const element7 = await expect(page.getByText('ยอดรวม')).toBeVisible()
    const element8 = await expect(page.getByText('การจัดส่ง')).toBeVisible()
    const element9 = await expect(page.getByText('รวมทั้งสิ้น (รวมภาษี)')).toBeVisible()
    const element10 = await expect(page.getByText('ซื้อสินค้าต่อ')).toBeVisible()
    const element11 = await expect(page.getByText('ทำรายการชำระเงิน')).toBeVisible()
    //All element11 is Thai language
});

test('TC34', async ({ page }) => {
    //test case 34 test Check ID language Check box In stock ID language "Bersihkan semua" 
    await page.goto('http://localhost:8080/th/');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/id/');
    await page.click('text=Aksesoris');
    // page.waitForNavigation()
    expect(page.url()).toBe('http://localhost:8080/id/6-accessories');
    const element = await expect(page.getByText('stok tersedia')).toBeVisible()
    await page.click('text=stok tersedia');
    const element2 = await expect(page.getByText('Bersihkan semua')).toBeVisible()

});

test('TC35', async ({ page }) => {
    //test case 35 test Check US language Check box In stock US language "Clear all" 
    await page.goto('http://localhost:8080/th/');
    await page.click('text=English');
    expect(page.url()).toBe('http://localhost:8080/us/');
    await page.click('text=Accessories');
    // page.waitForNavigation()
    expect(page.url()).toBe('http://localhost:8080/us/6-accessories');
    const element = await expect(page.getByText('In stock')).toBeVisible()
    await page.click('text=In stock');
    const element2 = await expect(page.getByText('Clear all')).toBeVisible()

});

test('TC36', async ({ page }) => {
    //test case 36 test Check TH language Check box In stock TH language "ล้างทั้งหมด" 
    await page.goto('http://localhost:8080/us/');
    await page.click('text=ภาษาไทย');
    expect(page.url()).toBe('http://localhost:8080/th/');
    await page.click('text=อุปกรณ์เสริม');
    expect(page.url()).toBe('http://localhost:8080/th/6-accessories');
    const element = await expect(page.getByText('สินค้ามีในสต็อค')).toBeVisible()
    await page.click('สินค้ามีในสต็อค');
    const element2 = await expect(page.getByText('ล้างทั้งหมด')).toBeVisible()

});

test('TC37', async ({ page }) => {
    //test case 37 test Check ID language Check box In stock ID language "Bersihkan semua" 
    await page.goto('http://localhost:8080/th/');
    await page.click('text=Bahasa Indonesia');
    expect(page.url()).toBe('http://localhost:8080/id/');
    await page.click('text=Aksesoris');
    expect(page.url()).toBe('http://localhost:8080/id/6-accessories');
    await page.click('text=Alat tulis');
    expect(page.url()).toBe('http://localhost:8080/id/7-stationery');
    const element1 = await expect(page.getByText('Relevansi')).toBeVisible()
    await page.click('text=Relevansi');//Check Box (Relevansi = Relevance = สิ่งที่เกียวข้อง)
    // error run time 
});

