const { Keyboard } = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const googleUsername = "myemail";
const googlePassword = "mypassword";
module.exports.addFileToYoutube = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    args:[
       '--disable-gpu',
       '--enable-webgl',
       '--window-size=800,800'
    ]
 }); 

 const loginUrl = "https://studio.youtube.com";
 const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36'; 
 const page = await browser.newPage();

 await page.setUserAgent(ua);
 await page.goto(loginUrl, { waitUntil: 'networkidle2' });
 await page.type('input[type="email"]', googleUsername);
 await page.keyboard.press('Enter');
 await page.waitForTimeout(2000);
 await page.type('input[type="password"]', googlePassword);
 await page.keyboard.press('Enter');
 await page.waitForTimeout(2000);
//  await page.waitForSelector('.button continue-to-studio black-secondary')
const el = await page.$('a.continue-to-studio.black-secondary')
 await el.click()
//  await page.waitForTimeout(2000);
//  await element.click();

}

this.addFileToYoutube();