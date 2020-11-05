const puppeteer = require("puppeteer");
const solidAuthFetcher = require("solid-auth-fetcher");

const SERVER_ROOT = process.env.SERVER_ROOT || "https://server";
const USERNAME = process.env.USERNAME || "alice";
const PASSWORD = process.env.PASSWORD || "alice123";

async function getCookieNextcloudCompatible() {
  const LOGIN_URL = `${SERVER_ROOT}/login`;
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(LOGIN_URL);
  await page.type("#user", USERNAME);
  await page.type("#password", PASSWORD);
  await page.click("#submit-form");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const cookies = await page.cookies();
  // console.log(cookies);
  const cookieStr = cookies
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");
  await browser.close();
  return cookieStr;
}

async function run () {
  let cookie
  if (process.env.SERVER_TYPE === 'nextcloud-server') {
    cookie = await getCookieNextcloudCompatible();
  } else if (process.env.SERVER_TYPE === 'node-solid-server') {
    cookie = await solidAuthFetcher.getNodeSolidServerCookie(SERVER_ROOT, USERNAME, PASSWORD);
  } else if (process.env.SERVER_TYPE === 'php-solid-server') {
    cookie = await solidAuthFetcher.getNodeSolidServerCookie(SERVER_ROOT, USERNAME, PASSWORD);
  }
  console.log(cookie);
}

// ..
run();
