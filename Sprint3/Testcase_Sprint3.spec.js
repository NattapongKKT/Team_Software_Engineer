    import { test, expect } from '@playwright/test';
    //---------------------- Check language Switch Page ---------------------------//
    test('TC01', async ({ page }) => {
        //test case switch TH to US
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/us/');
    });

    test('TC02', async ({ page }) => {
        //test case 02 switch TH to ID 
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/id/');
    });
    //-------------------------------------------------------------//
    test('TC03', async ({ page }) => {
        //test case 03 invalid test Click US but go to page ID
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/id/');
    });

    test('TC04', async ({ page }) => {
        //test case 04 invalid test Click ID but go to page US
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/us/');
    });
    //-------------------------------------------------------------//

    test('TC05', async ({ page }) => {
        //test case 05 switch US to TH 
        await page.goto('http://localhost:8080/us/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/th.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/th/');
    });

    test('TC06', async ({ page }) => {
        //test case 06 switch US TO ID 
        await page.goto('http://localhost:8080/us/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/id/');
    });
    //-------------------------------------------------------------//

    test('TC07', async ({ page }) => {
        //test case 07 invalid test Click TH but go to page ID
        await page.goto('http://localhost:8080/us/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/th.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/id/');
    });

    test('TC08', async ({ page }) => {
        //test case 08 invalid test Click ID but go to page TH  
        await page.goto('http://localhost:8080/us/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/th/');
    });

    //-------------------------------------------------------------//
    test('TC09', async ({ page }) => {
        //test case 09 switch ID TO TH 
        await page.goto('http://localhost:8080/id/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/th.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/th/');
    });

    test('TC10', async ({ page }) => {
        //test case 10 switch ID TO US 
        await page.goto('http://localhost:8080/id/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/us/');
    });

    //-------------------------------------------------------------//
    test('TC11', async ({ page }) => {
        //test case 11 invalid test Click ID but go to page TH  
        await page.goto('http://localhost:8080/id/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/th/');
    });

    test('TC12', async ({ page }) => {
        //test case 12 invalid test Click TH but go to page US
        await page.goto('http://localhost:8080/id/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/th.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/us/');

    });

    //---------------------- Check All Element and All language  ---------------------------//

    test('TC13', async ({ page }) => {
        //Check All Element TH  test 
        await page.goto('http://localhost:8080/th/');
        const element1 = await expect(page.getByText('สินค้ายอดนิยม')).toBeVisible()
        const element3 = await expect(page.getByText('ปากกาลิมิเต็ด 2024')).toBeVisible()
        const element4 = await expect(page.getByText('ปากกา CS')).toBeVisible()
        const element5 = await expect(page.getByText('ดินสอ CS')).toBeVisible()
        const element6 = await expect(page.getByText('ยางลบ CS')).toBeVisible()
        const element7 = await expect(page.getByText('กระติกเก็บความร้อน 360 มล.')).toBeVisible()
        const element8 = await expect(page.getByText('กระเป๋าสะพายข้าง')).toBeVisible()
        const element9 = await expect(page.getByText('เสื้อ คณะวิยาลัยการคอมพิวเตอร์')).toBeVisible()
        const element10 = await expect(page.getByText('สินค้าทั้งหมด')).toBeVisible()
        const element11 = await expect(page.getByText('ยินดีตอนรับสู่ วิทยาลัยการคอมพิวเตอร์  มหาวิทยาลัยขอนแก่น')).toBeVisible()
    });
    //-------------------------------------------------------------//

    test('TC14', async ({ page }) => {
        //test case 14 Check All Element TH   test in clothes page TH  
        await page.goto('http://localhost:8080/th/');
        await page.click('text=เสื้อ');
        expect(page.url()).toBe('http://localhost:8080/th/3-clothes');
        const element = await expect(page.getByText('หน้าหลัก')).toBeVisible()
        const element2 = await expect(page.getByText('หมวดย่อย')).toBeVisible()
        const element3 = await expect(page.getByText('เสื้อ คณะวิยาลัยการคอมพิวเตอร์')).toBeVisible()   
        const element4 = await expect(page.getByText('มีสินค้า 1 จำนวน')).toBeVisible()
        const element5 = await expect(page.getByText('เรียงตาม:')).toBeVisible()
        await page.waitForTimeout(1000);
        const textToCheck = 'แสดง 1-1 จาก 1 รายการ';
        const roleToCheck = 'genericRole'; 
        const locator = page.getByRole('button', { name: 'ผู้ชาย' });
        await page.goto('http://localhost:8080/th/13-men');
        await page.click('text=เสื้อ');
        expect(page.url()).toBe('http://localhost:8080/th/3-clothes');
        await page.waitForTimeout(1000);
        const locator2 = page.getByRole('button', { name: 'ผู้หญฺิง' });
        await page.goto('http://localhost:8080/th/14-women');
        await page.waitForTimeout(1000);
    });
    //-------------------------------------------------------------//

    test('TC15', async ({ page }) => {
        //Test case 15 Check All Element TH test in accessories page TH 
        await page.goto('http://localhost:8080/th/');
        await page.click('text=อุปกรณ์เสริม');
        await page.goto('http://localhost:8080/th/6-accessories');
        const element = await expect(page.getByText('มีสินค้า 7 รายการ')).toBeVisible()
        const element2 = await expect(page.getByText('เรียงตาม')).toBeVisible()
        const element3 = await expect(page.getByText('ปากกาลิมิเต็ด 2024')).toBeVisible()   
        const element4 = await expect(page.getByText('ปากกา CS')).toBeVisible()
        const element5 = await expect(page.getByText('เรียงตาม:')).toBeVisible()
        const element6 = await expect(page.getByText('ยางลบ CS')).toBeVisible()
        const element7 = await expect(page.getByText('ดินสอ CS')).toBeVisible()
        const element8 = await expect(page.getByText('กระเป๋าสะพายข้าง')).toBeVisible()
        const element9 = await expect(page.getByText('กระติกเก็บความร้อน 360 มล.')).toBeVisible()
        await page.waitForTimeout(1000);
    });
    //-------------------------------------------------------------//

    test('TC16', async ({ page }) => {
        //Test case 16 Check All Element TH test in Quick view “ปากกา CS” 
        await page.goto('http://localhost:8080/th/');
        await page.waitForTimeout(1000);
        await page.hover('text=เปิดหน้าต่างย่อ');
        await page.click('text=เปิดหน้าต่างย่อ');
        await page.waitForTimeout(1000);
        const element2 = await expect(page.getByText('รวมภาษีแล้ว')).toBeVisible()
        const element3 = await expect(page.getByText('แฟลชไดรฟ์ วิทยาลัยการคอมพิวเตอร์ ')).toBeVisible()   
        const element4 = await expect(page.getByText('จำนวน')).toBeVisible()
        const element5 = await expect(page.getByText('หยิบใส่ตะกร้า')).toBeVisible()
        const element6 = await expect(page.getByText('ชิ้นสุดท้ายในสต็อก')).toBeVisible()
    });
    //-------------------------------------------------------------//


    test('TC17', async ({ page }) => {
        //Test case 17 Check All Element TH test in “สินค้า ทั้งหมด” And dropdown “สิ่งที่ เกียวข้อง”
        await page.goto('http://localhost:8080/th/');
        await page.waitForTimeout(1000);
        await page.click('text=สินค้าทั้งหมด');
        await page.goto('http://localhost:8080/th/2-hna-hlak');
        await page.waitForTimeout(1000);
        await page.click('button:has-text("สิ่งที่เกี่ยวข้อง")');
        await expect(page.locator('#js-product-list-top')).toContainText('ตามชื่อ A ถึง Z');
        await expect(page.locator('#js-product-list-top')).toContainText('ตามชื่อ Z ถึง A');
        await expect(page.locator('#js-product-list-top')).toContainText('ราคา : จากน้อยไปมาก');
        await expect(page.locator('#js-product-list-top')).toContainText('ราคา: จากมากไปน้อย');
    });

    //-------------------------------------------------------------//

    test('TC18', async ({ page }) => {
        //Test case 18 Check All Element US   test 
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/us/');
        const element3 = await expect(page.getByText('POPULAR PRODUCTS')).toBeVisible()
        const element5 = await expect(page.getByText('Limited CS Pen Collection 2024')).toBeVisible()
        await page.waitForTimeout(1000);
        const textToCheck = 'CS Pen';
        const roleToCheck = 'link';
        await page.waitForTimeout(1000);
        const element7 = await expect(page.getByText('CS Pencil')).toBeVisible()
        const element8 = await expect(page.getByText('Eraser CS')).toBeVisible()
        const element9 = await expect(page.getByText('Thermal Flask 360ml')).toBeVisible()
        const element10 = await expect(page.getByText('CP Bag')).toBeVisible()
        const element11 = await expect(page.getByText('Shirts College Of Computing')).toBeVisible()
        const element12 = await expect(page.getByText('WELCOME TO COLLEGE OF COMPUTING KHON KAEN UNIVERSITY')).toBeVisible()
    });
    //-------------------------------------------------------------//

    test('TC19', async ({ page }) => {
        //test case 19 Check All Element US   test in clothes page US 
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/us/');
        await page.click('text=Clothes');
        expect(page.url()).toBe('http://localhost:8080/us/3-clothes');
        const element = await expect(page.getByText('Home')).toBeVisible()
        const element2 = await expect(page.getByText('Subcategories')).toBeVisible()
        const element3 = await expect(page.getByText('Shirts College Of Computing')).toBeVisible()   
        const element4 = await expect(page.getByText('There is 1 product.')).toBeVisible()
        const element5 = await expect(page.getByText('Sort by:')).toBeVisible()
        await page.waitForTimeout(1000);
        const textToCheck = 'Showing 1-1 of 1';
        const roleToCheck = 'genericRole'; 
        const locator = page.getByRole('button', { name: 'Men' });
        await page.goto('http://localhost:8080/us/13-men');
        await page.click('text=Clothes');
        expect(page.url()).toBe('http://localhost:8080/us/3-clothes');
        await page.waitForTimeout(1000);
        const locator2 = page.getByRole('button', { name: 'Women' });
        await page.goto('http://localhost:8080/us/14-women');
        await page.waitForTimeout(1000);
    });
    //-------------------------------------------------------------//

    test('TC20', async ({ page }) => {
        //Test case 20 Check All Element US   test in accessories page US 
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/us/');
        await page.click('text=Accessories');
        await page.goto('http://localhost:8080/us/6-accessories');
        const element = await expect(page.getByText('There are 7 products.')).toBeVisible()
        const element2 = await expect(page.getByText('Sort by:')).toBeVisible()
        const element3 = await expect(page.getByText('Limited CS Pen Collection 2024')).toBeVisible()   
        const textToCheck = 'CS Pen';
        const roleToCheck = 'link';
        const element5 = await expect(page.getByText('CS Pencil')).toBeVisible()
        const element6 = await expect(page.getByText('Thermal Flask 360ml')).toBeVisible()
        const element7 = await expect(page.getByText('Eraser CS')).toBeVisible()
        const element8 = await expect(page.getByText('CP Bag')).toBeVisible()
        const textToCheck2 = 'Showing 1-7 of 7 item(s)';
        const roleToCheck2 = 'genericRole'; 
        await page.waitForTimeout(1000);
    });
    //-------------------------------------------------------------//

    test('TC21', async ({ page }) => {
        //Test case 21 Check All Element US test in Quick view “Flash Drive”
        await page.goto('http://localhost:8080/th/');
        await page.waitForTimeout(1000);
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/us/');
        await page.hover('text=Quick view');
        await page.click('text=Quick view');
        await page.waitForTimeout(1000);
        const element2 = await expect(page.getByText('Tax included')).toBeVisible()
        const element3 = await expect(page.getByText('Flash Drive College of Computing 32GB')).toBeVisible()   
        const element4 = await expect(page.getByText('Quantity')).toBeVisible()
        const element5 = await expect(page.getByText('Add to cart')).toBeVisible()
        const element6 = await expect(page.getByText('Last items in stock')).toBeVisible()

    });
    //-------------------------------------------------------------//


    test('TC22', async ({ page }) => {
        //Test case 22 Check All Element US test in “All products”And dropdown “Relevance”
        await page.goto('http://localhost:8080/th/');
        await page.waitForTimeout(1000);
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/us/');
        await page.click('text=All products');
        await page.goto('http://localhost:8080/us/2-home');
        await page.waitForTimeout(1000);
        await page.click('button:has-text("Relevance")');
        await expect(page.locator('#js-product-list-top')).toContainText('Name, A to Z');
        await expect(page.locator('#js-product-list-top')).toContainText('Name, Z to A');
        await expect(page.locator('#js-product-list-top')).toContainText('Price, low to high');
        await expect(page.locator('#js-product-list-top')).toContainText('Price, high to low');

    });

    test('TC23', async ({ page }) => {
        //Test case 23 Check All Element ID   test 
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/id/');
        const element3 = await expect(page.getByText('POPULER')).toBeVisible()
        const element5 = await expect(page.getByText('Pensil CS')).toBeVisible()
        await page.waitForTimeout(1000);
        const textToCheck = 'Pena CS';
        const roleToCheck = 'link';
        await page.waitForTimeout(1000);
        const element7 = await expect(page.getByText('Penghapus CS')).toBeVisible()
        const element8 = await expect(page.getByText('Labu Termal 360ml')).toBeVisible()
        const element9 = await expect(page.getByText('Tas CP')).toBeVisible()
        const element10 = await expect(page.getByText('Kaos Sekolah Tinggi Komputasi')).toBeVisible()
        const element12 = await expect(page.getByText('SELAMAT DATANG DI COLLEGE OF COMPUTING KHON KAEN UNIVERSITY')).toBeVisible()
    });
    //-------------------------------------------------------------//

    test('TC24', async ({ page }) => {
        //test case 24 Check All Element ID   test in clothes page ID 
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/id/');
        await page.click('text=Pakaian');
        expect(page.url()).toBe('http://localhost:8080/id/3-clothes');
        const element = await expect(page.getByText('Beranda')).toBeVisible()
        const element2 = await expect(page.getByText('Sub kategori')).toBeVisible()
        const element3 = await expect(page.getByText('Kaos Sekolah Tinggi Komputasi')).toBeVisible()   
        const element4 = await expect(page.getByText('Terdapat 1 produk.')).toBeVisible()
        const element5 = await expect(page.getByText('Sortir menurut:')).toBeVisible()
        await page.waitForTimeout(1000);
        const textToCheck = 'Menunjukkan 1-1 dari 1 barang';
        const roleToCheck = 'genericRole'; 
        const locator = page.getByRole('button', { name: 'Laki-laki' });
        await page.goto('http://localhost:8080/id/13-laki-laki');
        await page.click('text=Pakaian');
        expect(page.url()).toBe('http://localhost:8080/id/3-clothes');
        await page.waitForTimeout(1000);
        const locator2 = page.getByRole('button', { name: 'Wanita' });
        await page.goto('http://localhost:8080/id/14-wanita');
        await page.waitForTimeout(1000);
    });
    //-------------------------------------------------------------//

    test('TC25', async ({ page }) => {
        //Test case 25 Check All Element ID   test in accessories page ID 
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/id/');
        await page.click('text=Aksesoris');
        await page.goto('http://localhost:8080/id/6-accessories');
        const element = await expect(page.getByText('Ada 7 produk.')).toBeVisible()
        const element2 = await expect(page.getByText('Pensil CS')).toBeVisible()
        const element3 = await expect(page.getByText('Koleksi Pena CS Terbatas 2024')).toBeVisible()   
        const textToCheck = 'Pena CS';
        const roleToCheck = 'link';
        const element5 = await expect(page.getByText('Pensil CS')).toBeVisible()
        const element6 = await expect(page.getByText('Labu Termal 360ml')).toBeVisible()
        const element7 = await expect(page.getByText('Penghapus CS')).toBeVisible()
        const element8 = await expect(page.getByText('Tas CP')).toBeVisible()
        const textToCheck2 = 'Menunjukkan 1-7 dari 7 barang';
        const roleToCheck2 = 'genericRole'; 
        await page.waitForTimeout(1000);

    });
    //-------------------------------------------------------------//

    test('TC26', async ({ page }) => {
        //Test case 26 Check All Element ID test in Lihat sekilas “Flash Disk”
        await page.goto('http://localhost:8080/th/');
        await page.waitForTimeout(1000);
        const imageElement = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/id/');
        await page.hover('text=Lihat sekilas');
        await page.click('text=Lihat sekilas');
        await page.waitForTimeout(1000);
        const element2 = await expect(page.getByText('Termasuk pajak')).toBeVisible()
        const element3 = await expect(page.getByText('Flash Disk Sekolah Tinggi Komputasi 32GB')).toBeVisible()   
        const element4 = await expect(page.getByText('Jumlah')).toBeVisible()
        const element5 = await expect(page.getByText('BELI')).toBeVisible()
        const element6 = await expect(page.getByText('Barang terakhir dalam stok')).toBeVisible()

    });
    //-------------------------------------------------------------//

    test('TC27', async ({ page }) => {
        //Test case 27 Check All Element ID test in “Semua produk” And dropdown “Relevansi”
        await page.goto('http://localhost:8080/th/');
        await page.waitForTimeout(1000);
        const imageElement = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/id/');
        await page.click('text=Semua produk');
        await page.goto('http://localhost:8080/id/2-beranda');
        await page.waitForTimeout(1000);
        await page.click('button:has-text("Relevansi")');
        await expect(page.locator('#js-product-list-top')).toContainText('Nama, A ke Z');
        await expect(page.locator('#js-product-list-top')).toContainText('Nama, Z ke A');
        await expect(page.locator('#js-product-list-top')).toContainText('Harga, Rendah ke Tinggi');
        await expect(page.locator('#js-product-list-top')).toContainText('Harga, Tinggi ke Rendah');
    });
 //-------------------------------------------------------------//

    test('TC28', async ({ page }) => {
        // Test case 28 Check Element in Home Page All Product Flutter (+),(-)All language (TH,US,ID)
        await page.goto('http://localhost:8080/th/');
        await page.click('text=สินค้าทั้งหมด');
        await page.goto('http://localhost:8080/th/2-hna-hlak');
        await page.waitForTimeout(1000);
        await page.getByText('').click();
        await page.waitForTimeout(1000);
        const textToCheck = 'ผู้ชาย';
        const roleToCheck = 'listitem'; 
        const textToCheck2 = 'ผู้ชาย';
        const roleToCheck2 = 'listitem'; 
        await page.getByText('').click();
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        expect(page.url()).toBe('http://localhost:8080/us/2-home');
        await page.waitForTimeout(1000);
        await page.getByText('').click();
        const textToCheck3 = 'Men';
        const roleToCheck3= 'listitem'; 
        const textToCheck4 = 'Women';
        const roleToCheck4 = 'listitem'; 
        await page.getByText('').click();
        const imageElement2 = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement2.click();
        expect(page.url()).toBe('http://localhost:8080/id/2-beranda');
        await page.waitForTimeout(1000);
        await page.getByText('').click();
        await page.waitForTimeout(1000);
        const textToCheck5 = 'Laki-laki';
        const roleToCheck5 = 'listitem'; 
        const textToCheck6 = 'Wanita';
        const roleToCheck6 = 'listitem'; 
        await page.getByText('').click();
        await page.waitForTimeout(1000);
    });
 //-------------------------------------------------------------//
 
 test('TC29', async ({ page }) => {
        //Test case 29 Check element in detail Product “แฟลชไดรฟ์” TH
        await page.goto('http://localhost:8080/th/');
        await page.click('text=แฟลชไดรฟ์');
        await page.goto('http://localhost:8080/th/hna-hlak/21-flashdrived.html');
        await page.waitForTimeout(1000);
        const element2 = await expect(page.getByText('รวมภาษีแล้ว')).toBeVisible()
        const textToCheck2 = 'แฟลชไดรฟ์ วิทยาลัยการคอมพิวเตอร์ 32GB';
        const roleToCheck2 = 'paragrap';    
        const element4 = await expect(page.getByText('จำนวน')).toBeVisible()
        const element5 = await expect(page.getByText('หยิบใส่ตะกร้า')).toBeVisible()
        const element6 = await expect(page.getByText('ชิ้นสุดท้ายในสต็อก')).toBeVisible()
        const element7 = await expect(page.getByText('ความจุ')).toBeVisible()
        const element8 = await expect(page.getByText('รูปแบบ')).toBeVisible()
        await page.click('text=รายละเอียดสินค้า');
        const element9 = await expect(page.getByText('สินค้ามีในสต็อค 3 รายการ')).toBeVisible()
        await page.waitForTimeout(1000);
    });
//-------------------------------------------------------------//

    test('TC30', async ({ page }) => {
        //Test case 30 Check element in detail Product “Flash Drive” US
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        await page.click('text=Flash Drive');
        await page.goto('http://localhost:8080/us/home/21-flashdrived.html');
        await page.waitForTimeout(1000);
        const element2 = await expect(page.getByText('Tax included')).toBeVisible()
        const textToCheck2 = 'Flash Drive College of Computing 32GB';
        const roleToCheck2 = 'paragrap';    
        const element4 = await expect(page.getByText('Quantity')).toBeVisible()
        const element5 = await expect(page.getByText('ADD TO CART')).toBeVisible()
        const element6 = await expect(page.getByText('Last items in stock')).toBeVisible()
        const element7 = await expect(page.getByText('Capacity')).toBeVisible()
        const element8 = await expect(page.getByText('Interface')).toBeVisible()
        await page.click('text=Product Details');
        const element9 = await expect(page.getByText('In stock 3 Items')).toBeVisible()
        await page.waitForTimeout(1000);
    });
    
    test('TC31', async ({ page }) => {
        //Test case 31 Check element in detail Product “Flash Disk” ID
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement.click();
        await page.click('text=Flash Disk');
        await page.goto('http://localhost:8080/id/beranda/21-flashdrived.html');
        await page.waitForTimeout(1000);
        const element2 = await expect(page.getByText('Termasuk pajak')).toBeVisible()
        const textToCheck2 = 'Flash Disk Sekolah Tinggi Komputasi 32GB';
        const roleToCheck2 = 'paragrap';    
        const element4 = await expect(page.getByText('Jumlah')).toBeVisible()
        const element5 = await expect(page.getByText('Beli')).toBeVisible()
        const element6 = await expect(page.getByText('Barang terakhir dalam stok')).toBeVisible()
        const element7 = await expect(page.getByText('Kapasitas')).toBeVisible()
        const element8 = await expect(page.getByText('Antarmuka')).toBeVisible()
        await page.click('text=Detil produk');
        const element9 = await expect(page.getByText('stok tersedia 3 item')).toBeVisible()
    });

    test('TC32', async ({ page }) => {
        //Test case 32 Check element in detail Product “ปากกาลิมิเต็ด 2024 คณะวิทยาการคอมพิวเตอร์” TH
        await page.goto('http://localhost:8080/th/');
        await page.click('text=ปากกาลิมิเต็ด 2024');
        await page.goto('http://localhost:8080/th/hna-hlak/22-limited-cs-pencil-collection-2024.html');
        await page.waitForTimeout(1000);
        const element2 = await expect(page.getByText('รวมภาษีแล้ว')).toBeVisible()
        const textToCheck2 = 'ปากกาลิมิเต็ด 2024 คณะวิทยาการคอมพิวเตอร์ ';
        const roleToCheck2 = 'paragrap';    
        const element4 = await expect(page.getByText('จำนวน')).toBeVisible()
        const element5 = await expect(page.getByText('หยิบใส่ตะกร้า')).toBeVisible()
        const element6 = await expect(page.getByText('ประเภท: ปากกาลูกลื่น')).toBeVisible()
        const element7 = await expect(page.getByText('วัสดุ: อลูมิเนียมคัดพิเศษ')).toBeVisible()
        const element8 = await expect(page.getByText('ใช้งานได้ทั้งบนกระดาษและพื้นผิวอื่น ๆ ออกแบบอย่างง่าย สีน้ำเงินเข้มที่สวยงามและโดดเด่น')).toBeVisible()
        await page.click('text=รายละเอียดสินค้า');
        await page.waitForTimeout(1000);
        const element9 = await expect(page.getByText('สินค้ามีในสต็อค')).toBeVisible() 
    });
//-------------------------------------------------------------//

    test('TC33', async ({ page }) => {
        //Test case 33 Check element in detail Product “Limited CS Pen Collection 2024” US
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/us.jpg"]');
        await imageElement.click();
        await page.click('text=Limited CS Pen Collection 2024');
        await page.goto('http://localhost:8080/us/home/22-limited-cs-pencil-collection-2024.html');
        await page.waitForTimeout(1000);
        const element2 = await expect(page.getByText('Tax included')).toBeVisible()
        const textToCheck2 = 'Limited CS Pen Collection 2024';
        const roleToCheck2 = 'paragrap';    
        const element4 = await expect(page.getByText('Quantity')).toBeVisible()
        const element5 = await expect(page.getByText('ADD TO CART')).toBeVisible()
        const element6 = await expect(page.getByText('Type: Ballpoint pen')).toBeVisible()
        const element7 = await expect(page.getByText('Material: Specially selected aluminum')).toBeVisible()
        const element8 = await expect(page.getByText('Works on paper and other surfaces simple design A beautiful and striking dark blue.')).toBeVisible()
        await page.click('text=Product Details');
        const element9 = await expect(page.getByText('In stock')).toBeVisible()
    });
    
    test('TC34', async ({ page }) => {
        //Test case 34 Check element in detail Product “Limited CS Pen Collection 2024” ID
        await page.goto('http://localhost:8080/th/');
        const imageElement = await page.waitForSelector('img[src="/img/flags/id.jpg"]');
        await imageElement.click();
        await page.click('text=Koleksi Pena CS Terbatas 2024');
        await page.goto('http://localhost:8080/id/beranda/22-limited-cs-pencil-collection-2024.html ');
        await page.waitForTimeout(1000);
        const element2 = await expect(page.getByText('Termasuk pajak')).toBeVisible()
        const textToCheck2 = 'Koleksi Pena CS Terbatas 2024';
        const roleToCheck2 = 'paragrap';    
        const element4 = await expect(page.getByText('Jumlah')).toBeVisible()
        const element5 = await expect(page.getByText('Beli')).toBeVisible()
        const element6 = await expect(page.getByText('Jenis: Pena')).toBeVisible()
        const element7 = await expect(page.getByText('Bahan: Aluminium pilihan khusus')).toBeVisible()
        const element8 = await expect(page.getByText('Bekerja pada kertas dan permukaan lainnya dengan desain sederhana. Biru tua yang indah dan mencolok.')).toBeVisible()
        await page.click('text=Detil produk');
        const element9 = await expect(page.getByText('stok tersedia')).toBeVisible()
    });

    test('TC35', async ({ page }) => {
        //Test case 35 Check element in detail Product “กระติกเก็บความร้อน 360 มล.” TH
        await page.goto('http://localhost:8080/th/');
        await page.click('text=กระติกเก็บความร้อน 360 มล.');
        await page.goto('http://localhost:8080/th/hna-hlak/28-thermal-flask-360ml.html');
        await page.waitForTimeout(1000);
        const element2 = await expect(page.getByText('รวมภาษีแล้ว')).toBeVisible()
        const textToCheck2 = 'กระติกเก็บความร้อน 360 มล. ';
        const roleToCheck2 = 'paragrap';    
        const element4 = await expect(page.getByText('จำนวน')).toBeVisible()
        const element5 = await expect(page.getByText('หยิบใส่ตะกร้า')).toBeVisible()
        await page.waitForTimeout(1000);
        const textToCheck = 'สี: ขาว ';
        const roleToCheck = 'paragrap'; 
        const textToCheck3 = 'การเก็บรักษา/ร้อน: 66°C @ 6 ชม.';
        const roleToCheck3 = 'paragrap'; 
        const textToCheck4 = 'การเก็บรักษา/ความเย็น: 9°C @ 6 ชม';
        const roleToCheck4 = 'paragrap';
        const textToCheck5 = 'ความจุ: 360มล.';
        const roleToCheck5 = 'paragrap';
        await page.waitForTimeout(1000);
        const element10 = await expect(page.getByText('สินค้ามีในสต็อค 10 รายการ')).toBeVisible() 
    });
//-------------------------------------------------------------//

    test('TC36', async ({ page }) => {
        //Test case 36 Check element in detail Product “Thermal Flask 360ml” US
        await page.goto('http://localhost:8080/th/');
        await page.getByRole('link', { name: 'us' }).click();
        await page.getByText('Thermal flask 360ml').click();
        await page.getByRole('heading', { name: 'Thermal flask 360ml' }).click();
        await page.getByText('Tax included').click();
        await page.locator('#product-description-short-28').getByText('Color: White').click();
        await page.locator('#product-description-short-28').getByText('Retention/Hot: 66°C @ 6 hrs.').click();
        await page.locator('#product-description-short-28').getByText('Retention/Cold: 9°C @ 6 hrs.').click();
        await page.locator('#product-description-short-28').getByText('Capacity: 360ml.').click();
        await page.getByText('Quantity').click();
        await page.getByRole('button', { name: ' Add to cart' }).click();
        await page.getByText('In stock 10 Items').click();
    });
    //-------------------------------------------------------------//
    
    test('TC37', async ({ page }) => {
        //Test case 37 Check element in detail Product “Labu Termal 360ml.” ID
        await page.goto('http://localhost:8080/th/');
        await page.getByRole('link', { name: 'id' }).click();
        await page.getByText('Labu termal 360ml').click();
        await page.getByRole('heading', { name: 'Labu termal 360ml' }).click();
        await page.getByText('Termasuk pajak').click();
        await page.locator('#product-description-short-28').getByText('Warna putih').click();
        await page.locator('#product-description-short-28').getByText('Retensi/Panas: 66°C @ 6 jam.').click();
        await page.locator('#product-description-short-28').getByText('Retensi/Dingin: 9°C @ 6 jam.').click();
        await page.locator('#product-description-short-28').getByText('Kapasitas: 360ml.').click();
        await page.getByText('Jumlah').click();
        await page.getByRole('button', { name: ' Beli' }).click();
        await page.getByText('stok tersedia 10 item').click();
    });
    //-------------------------------------------------------------//

    test('TC38', async ({ page }) => {
        //Test case 38 Invalid testproduct detail“ยางลบ CS”
        await page.goto('http://localhost:8080/th/');
        await page.getByText('ยางลบ CS').click();
        expect(page.url()).toBe('http://localhost:8080/us/home/27-eraser-cs.html');
        const element2 = await expect(page.getByText('ERASER CS')).toBeVisible()
      });
      //-------------------------------------------------------------//

      test('TC39', async ({ page }) => {
        //Test case 39 Invalid test product detail “เสื้อ คณะวิยาลัยการคอมพิวเตอร์”
        await page.goto('http://localhost:8080/th/');
        await page.getByText('เสื้อ คณะวิยาลัยการคอมพิวเตอร์').click();
        expect(page.url()).toBe('http://localhost:8080/th/hna-hlak/31-shop-shirts-college-of-computing.html');
        await page.getByRole('link', { name: 'id' }).click();
        expect(page.url()).toBe('http://localhost:8080/us/home/27-eraser-cs.html');
        const element2 = await expect(page.getByText('SHIRTS COLLEGE OF COMPUTING')).toBeVisible()
      });
      //-------------------------------------------------------------//

      test('TC40', async ({ page }) => {
        //Test case 40 Invalid testproduct detail “ดินสอ CS”
        await page.goto('http://localhost:8080/us/');
        await page.getByText('CS Pencil').click();
        await page.getByRole('link', { name: 'id' }).click();
        expect(page.url()).toBe('http://localhost:8080/th/hna-hlak/26-limited-cs-pencil-collection-2024.html');
        const element2 = await expect(page.getByText('ดินสอ CS')).toBeVisible()
      });
      //-------------------------------------------------------------//