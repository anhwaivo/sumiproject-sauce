const axios = require('axios');
const fs = require('fs');
const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/qrcodembbank';

exports.index = async (req, res, next) => {
  try {
    if (huydev(req, res)) return;
    const stk = req.query.stk;
    if (!stk) return res.status(400).json({ error: 'Vui lòng nhập số stk.' });

    const response = await axios.get(`https://img.vietqr.io/image/MB-${stk}-qr_only.png`, { responseType: 'arraybuffer' });

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