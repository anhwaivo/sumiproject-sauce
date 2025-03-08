exports.name = '/pin/download';
const axios = require('axios');
exports.index = async (req, res, next) => {
  const link = req.query.link;
  if (!link) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' }); 

  async function unshortenUrl(shortUrl) {
    try {
        const response = await axios.head(shortUrl);
        const longUrl = response.request.res.responseUrl;
        return longUrl;
    } catch (error) {
        throw new Error("Lỗi: " + error.message);
    }
}

  async function getPinIdFromUrl(url) {
    try {
      let pinIdRegex;
      if (url.includes('pinterest.com/pin/')) {
        pinIdRegex = /\/pin\/(\d+)/;
      } else if (url.includes('pin.it')) {
        const fullUrl = await unshortenUrl(url);
        pinIdRegex = /\/pin\/(\d+)/;
        url = fullUrl;
      } else {
        throw new Error("URL sai");
      }

      const pinIdMatch = url.match(pinIdRegex);
      if (pinIdMatch && pinIdMatch[1]) {
        return pinIdMatch[1];
      } else {
        throw new Error("URL sai");
      }
    } catch (error) {
      throw error; // Ensure errors are propagated
    }
  }

  try {
    const pinId = await getPinIdFromUrl(link);
    console.log(`Pin ID: ${pinId}`);
    const pinterestApiUrl = `https://www.pinterest.com/resource/PinResource/get/?source_url=&data={"options":{"id":"${pinId}","field_set_key":"auth_web_main_pin","noCache":true,"fetch_visual_search_objects":true},"context":{}}&_=${Date.now()}`;

    const response = await axios.get(pinterestApiUrl);
    console.log('API response received');

    if (response.data.resource_response) {
      // Định dạng JSON trả về
      const formattedResponse = JSON.stringify(response.data.resource_response, null, 2);
      res.send(`<pre>${formattedResponse}</pre>`);
    } else {
      res.status(404).json({ error: 'Không tìm thấy dữ liệu' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(error.response ? error.response.status : 500).json({ error: error.message });
  }
};
