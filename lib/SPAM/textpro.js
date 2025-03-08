const axios = require('axios');
const fs = require('fs');
// const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/textpro';

exports.index = async (req, res, next) => {
  try {
    // if (huydev(req, res)) return;
    const id = req.query.id;
    if (!id) return res.status(400).json({ error: 'Vui lòng nhập id.' });
    const text = req.query.text;
    if (id > 169 || id == 170) return res.status(400).json({ error: 'id max 169' });
    if (!text) return res.status(400).json({ error: 'Vui lòng nhập text.' });

    const response = await axios.get(`https://imtiaz.x-sakibin.repl.co/api/textpro?number=${id}&text=${encodeURIComponent(text)}`, { responseType: 'arraybuffer' });

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