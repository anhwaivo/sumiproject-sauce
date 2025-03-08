const axios = require('axios');
const fs = require('fs');
//const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/fakesodu';

exports.index = async (req, res, next) => {
  try {
    //if (huydev(req, res)) return;
    const name = req.query.name;
  const stk = req.query.stk;
  const amount = req.query.amount;
  const point = req.query.point;
  

  if (!name) return res.json({ error: 'Thiếu tên tài khoản' });
  if (!stk) return res.json({ error: 'Thiếu stk' });
  if (!amount) return res.json({ error: 'Thiếu số dư' });
  if (!point) return res.json({ error: 'Thiếu điểm thưởng' });
  
    const response = await axios.get(`https://all.dungkon.id.vn/fakesodu?name=${encodeURIComponent(name)}&stk=${encodeURIComponent(stk)}&amount=${encodeURIComponent(amount)}&point=${encodeURIComponent(point)}`, { responseType: 'arraybuffer' });

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