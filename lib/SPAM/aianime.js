const axios = require('axios');
const fs = require('fs');
// const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/aianime';

exports.index = async (req, res, next) => {
  try {
    // if (huydev(req, res)) return;
     const link = req.query.link;
    if (!link) return res.status(400).json({ error: 'Thiếu link ảnh.' });

    const response = await axios.get(`https://animeify.shinoyama.repl.co/convert-to-anime?imageUrl=${link}`);
    const image = response.data.urls[1];
    const anime = await axios.get(`https://www.drawever.com${image}`, { responseType: 'arraybuffer' });

    const imageBuffer = Buffer.from(anime.data, 'binary');

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