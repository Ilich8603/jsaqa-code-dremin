/*const puppeteer = require('puppeteer');

let browser;

// Общая настройка для всех тестов
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
  });
}, 30000);      


afterAll(async () => {
  await browser.close();
});*/



describe("Github page tests", () => {

  let page;

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('https://github.com/team');
  }, 15000);

  afterEach(async () => {
    await page.close();
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1', { timeout: 10000 });
    const title2 = await page.title();
    expect(title2).toEqual('GitHub · Change is constant. GitHub keeps you ahead. · GitHub');
  },
  30000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },
  10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
      timeout: 7000,
  });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain('Get started with Team')
  },
  15000);
});

describe('Other pages', () => {
  let page;

  
  beforeEach(async () => {
    page = await browser.newPage();
  }, 15000);

  afterEach(async () => {
    await page.close();
  });

  
    test("Pricing page should contains the h1 header", async () => {
      await page.goto('https://github.com/pricing');
      await page.waitForSelector('h1', { timeout: 15000 });
      const title = await page.title();
      expect(title).toEqual('Pricing · Plans for every developer · GitHub');
    }, 50000);
  

  
    test("Solutions page should contains the title", async () => {
      await page.goto('https://github.com/solutions');
      await page.waitForSelector('h1', { timeout: 10000 });
      const title = await page.title();
      expect(title).toEqual("GitHub · Scalable AI-Powered Enterprise Platform Solutions · GitHub");
    }, 50000);


    test('Resources page should display the correct title', async () => {
      await page.goto('https://github.com/resources');
      await page.waitForSelector('h1', { timeout: 15000 });
      const title = await page.title();
      expect(title).toEqual('Resources to help you build, secure, and scale with GitHub · GitHub');
    }, 50000);
});

