const axios = require('axios');
const request = require('request');
const { writeFileSync, existsSync } = require('fs-extra');
const { join } = require("path");

async function refreshAccessToken() {
  const path = join(__dirname, 'token.json');
  if (!existsSync(path)) {
    writeFileSync(path, JSON.stringify({}, null, 4));
  }
  const newToken = await getAccessToken('6d8d6da35bc54506a09c8a60edd8c06f', '8a62bf8cd936489fab134375178cd4ca');
  if (newToken) {
    writeFileSync(path, JSON.stringify({
      token: newToken.access_token
    }, null, 4));
  } else {
    console.error("K lay token moi duoc :sob:.");
  }
}

async function search(keywords, limit, retryCount = 0) {
  if (retryCount > 3) {
    console.error("max retry r...");
    return [];
  }

  const result = [];
  try {
    const accessToken = require('./token.json');
    const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
      params: { q: keywords, type: 'track', limit: limit || 6 },
      headers: { Authorization: `Bearer ${accessToken.token}` }
    });

    data.tracks.items.forEach(i => {
      result.push({
        author: {
          id: i.album.artists[0].id,
          name: i.album.artists[0].name,
          type: i.album.artists[0].type,
          uri: i.album.artists[0].uri,
        },
        dataMusic: {
          type: i.type,
          id: i.id,
          name: i.name,
          duration_ms: i.duration_ms,
          urls: i.external_urls.spotify,
          preview_url: i.preview_url,
        }
      });
    });
  } catch (e) {
    console.error(e);

    await refreshAccessToken();
    delete require.cache[require.resolve('./token.json')];
    return await search(keywords, limit, retryCount + 1);
  }

  return result;
}

async function getAccessToken(client_id, client_secret) {
  return new Promise((resolve) => {
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        Authorization: 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
      },
      form: { grant_type: 'client_credentials' },
      json: true
    };

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        resolve(false);
      }
    });
  });
}

module.exports = {
  search,
  getAccessToken
};
