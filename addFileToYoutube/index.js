const { Keyboard } = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const { generateRandomTitleForCarols } = require('./utils')
puppeteer.use(StealthPlugin());
require('dotenv').config()
const googleUsername = process.env.GMAIL_EMAIL;
const googlePassword = process.env.GMAIL_PASSWORD
module.exports.addFileToYoutube = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    args:[
       '--disable-gpu',
       '--enable-webgl',
       '--window-size=1920,1080',
       
    ]
 }); 

//opens page not as a bot
 const loginUrl = "https://studio.youtube.com";
 const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36'; 
 const page = await browser.newPage();
 await page.setUserAgent(ua);
 await page.goto(loginUrl, { waitUntil: 'networkidle2' });

 //enters credentials
 await page.type('input[type="email"]', googleUsername);
 await page.keyboard.press('Enter');
 await page.waitForTimeout(2000);
 await page.type('input[type="password"]', googlePassword);
 await page.keyboard.press('Enter');
 await page.waitForTimeout(2000);

 //waits for page info to exit from it
 const el = await page.$('a.continue-to-studio.black-secondary')
 await el.click()

 //waits until all network requests are being completed
 await page.waitForNavigation({waitUntil: 'networkidle2'});    

 //clicks upload button and waits
 const uploadButton = await page.$('ytcp-icon-button[id="upload-icon"]')
 await uploadButton.click()
 await page.waitForTimeout(5000);

 //uploads the file and wait 5secd
 const inputUploadHandle = await page.$('input[type=file]');
 let fileToUpload = 'addFileToYoutube/video1.mp4';
 inputUploadHandle.uploadFile(fileToUpload);
 await page.waitForTimeout(5000);

 //handles title and description areas and waits 2 secs.
 const title = await page.$('#title-textarea');
 await page.keyboard.type(generateRandomTitleForCarols());
 const description = await page.$('#description-textarea');
 await description.focus('#container');
 await page.keyboard.type("This is royalty free music, enjoy the christmas time!");
 await page.waitForTimeout(2000);

 //clicks that the audio is for kids.
 const forKidsButton = await page.$('tp-yt-paper-radio-button')
 await forKidsButton.click()
 await page.waitForTimeout(2000);

 //navigates to the last page
 await page.waitForSelector('ytcp-button[id="next-button"]'); 
 const nextButton = await page.$('ytcp-button[id="next-button"]');
 await page.waitForTimeout(2000);
 await nextButton.click()
 await nextButton.click()
 await nextButton.click()

 //waits until radio button exists and clicks it then finishes.
 await page.waitForSelector('tp-yt-paper-radio-button[name="PUBLIC"]'); 
 const publicButton = await page.$('tp-yt-paper-radio-button[name="PUBLIC"]')
 await publicButton.click()
 const doneButton = await page.$('ytcp-button[id="done-button"]')
 await doneButton.click()
}

this.addFileToYoutube()