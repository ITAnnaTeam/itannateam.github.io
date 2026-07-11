const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Configuration
const SITE_URL = 'https://itannateam.github.io';
const BING_KEY = '1c89f5c49bdf483b9c02d12eb6deea48';
const SITEMAP_PATH = path.join(__dirname, '../build/sitemap.xml');

// Helper to base64url encode
function base64url(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

// Function to parse URLs from sitemap.xml
function parseSitemapUrls() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`[Ping] Sitemap not found at ${SITEMAP_PATH}`);
    return [];
  }
  const content = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const matches = content.match(/<loc>(.*?)<\/loc>/g);
  if (!matches) return [];
  return matches.map(m => m.replace(/<\/?loc>/g, '').trim());
}

async function pingIndexNow(urls) {
  if (urls.length === 0) {
    console.log('[IndexNow] No URLs found to submit.');
    return;
  }

  const hostname = new URL(SITE_URL).hostname;
  console.log(`[IndexNow] Submitting ${urls.length} URLs for ${hostname}...`);

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: hostname,
        key: BING_KEY,
        keyLocation: `${SITE_URL}/${BING_KEY}.txt`,
        urlList: urls,
      }),
    });

    if (response.ok) {
      console.log('[IndexNow] Successfully submitted URLs to IndexNow!');
    } else {
      const text = await response.text();
      console.error(`[IndexNow] Failed to submit URLs. Status: ${response.status}. Response: ${text}`);
    }
  } catch (err) {
    console.error('[IndexNow] Error pinging IndexNow API:', err);
  }
}

async function getGoogleAccessToken(serviceAccount) {
  const jwtHeader = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const jwtClaimSet = base64url(
    JSON.stringify({
      iss: serviceAccount.client_email,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })
  );

  const signatureInput = `${jwtHeader}.${jwtClaimSet}`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signatureInput);
  const signature = base64url(sign.sign(serviceAccount.private_key));

  const jwt = `${signatureInput}.${signature}`;

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to obtain Google access token: ${text}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function pingGoogleIndexing(urls) {
  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!serviceAccountJson) {
    console.log('\n[Google Indexing] Skipping Google Indexing API submission.');
    console.log('[Google Indexing] To enable instant Google indexing, add your Google Service Account JSON to GitHub secrets as GOOGLE_SERVICE_ACCOUNT_JSON.');
    return;
  }

  let serviceAccount;
  try {
    serviceAccount = JSON.parse(serviceAccountJson);
  } catch (err) {
    console.error('[Google Indexing] Invalid GOOGLE_SERVICE_ACCOUNT_JSON format.');
    return;
  }

  console.log('\n[Google Indexing] Authenticating with Google Indexing API...');
  try {
    const accessToken = await getGoogleAccessToken(serviceAccount);
    console.log(`[Google Indexing] Authenticated. Submitting ${urls.length} URLs...`);

    // Google Indexing API requires submitting URLs one-by-one or via batching.
    // We will submit one-by-one (usually up to 200 per day is the default quota).
    for (const url of urls) {
      const response = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          url: url,
          type: 'URL_UPDATED',
        }),
      });

      if (response.ok) {
        console.log(`[Google Indexing] Successfully submitted URL: ${url}`);
      } else {
        const text = await response.text();
        console.error(`[Google Indexing] Failed for URL ${url}. Status: ${response.status}. Response: ${text}`);
      }
    }
  } catch (err) {
    console.error('[Google Indexing] Error submitting to Google Indexing API:', err);
  }
}

async function main() {
  console.log('[Ping] Parsing URLs from sitemap...');
  const urls = parseSitemapUrls();
  if (urls.length === 0) {
    console.warn('[Ping] No URLs extracted from sitemap.xml.');
    return;
  }

  console.log(`[Ping] Found ${urls.length} URLs in sitemap.`);
  await pingIndexNow(urls);
  await pingGoogleIndexing(urls);
}

main().catch(console.error);
