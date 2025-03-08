const axios = require('axios');
const fs = require('fs');
// const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/getlogo';

exports.index = async (req, res, next) => {
  try {
    // if (huydev(req, res)) return;
    const domain = req.query.domain;
    if (!domain) return res.status(400).json({ error: 'Vui lòng nhập domain muốn lấy logo.' });

    const response = await axios.get(`https://logo.clearbit.com/${domain}`, { responseType: 'arraybuffer' });

    const imageBuffer = Buffer.from(response.data, 'binary');

    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': imageBuffer.length
    });
    res.end(imageBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};