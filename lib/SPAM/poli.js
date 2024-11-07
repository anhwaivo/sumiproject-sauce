const axios = require('axios');
const fs = require('fs');
// const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/poli';

exports.index = async (req, res, next) => {
  try {
    // if (huydev(req, res)) return;
    const prompt = req.query.prompt;
    if (!prompt) return res.status(400).json({ error: 'Vui lòng nhập prompt.' });

    const response = await axios.get(`https://api.easy-api.online/api/poli?q=${encodeURIComponent(prompt)}`, { responseType: 'arraybuffer' });

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