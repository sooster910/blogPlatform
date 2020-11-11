const puppeteer = require('puppeteer');

let browser,page;

beforeEach(async ()=>{
     browser = await puppeteer.launch({headless:false})
     page = await browser.newPage();
     await page.goto('localhost:3000'); //use await becuase navigate to somewhere take some amount of time
});
afterEach(async()=>{
    await browser.close();
})

test('Can get brand logo', async()=>{

    const text = await page.$eval('a.brand-logo',el=> el.innerHTML);
    expect(text).toMatch(/Bloggy/gi);

});