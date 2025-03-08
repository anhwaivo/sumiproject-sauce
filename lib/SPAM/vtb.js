const axios = require('axios');
const fs = require('fs');
const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/vtb';

exports.index = async (req, res, next) => {
  try {
    if (huydev(req, res)) return;
    const stk = req.query.stk;
    if (!stk) return res.status(400).json({ error: 'Vui lòng nhập số stk.' });
    const tien = req.query.tien;
    if (!tien) return res.status(400).json({ error: 'Vui lòng nhập số tiền.' });
    const noidung = req.query.noidung;
    if (!noidung) return res.status(400).json({ error: 'Vui lòng nhập nội dung chuyển khoản.' });
    const ctk = req.query.ctk;
    if (!ctk) return res.status(400).json({ error: 'Vui lòng nhập Tên chủ tài khoản.' });

    const response = await axios.get(`https://img.vietqr.io/image/ICB-${stk}-print.png?amount=${tien}&addInfo=${noidung}&accountName=${ctk}`, { responseType: 'arraybuffer' });

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