const axios = require('axios');
const fs = require('fs');
const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/fakebill';

exports.index = async (req, res, next) => {
  try {
    if (huydev(req, res)) return;
    const name_gui = req.query.name_gui;
  const stk_gui = req.query.stk_gui;
  const bank = req.query.bank;
  const code1 = req.query.code1;
  const code = req.query.code;
  const stk = req.query.stk;
  const name_nhan = req.query.name_nhan;
  const amount = req.query.amount;
  const noidung = req.query.noidung;
  const magiaodich = req.query.magiaodich;
  const time1 = req.query.time1;
  const hinhthucck = req.query.hinhthucck;
  const thoigianhientai = req.query.thoigianhientai;

  if (!name_gui) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  if (!stk_gui) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  if (!bank) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  if (!code1) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  if (!code) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  if (!stk) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  if (!name_nhan) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  if (!amount) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  if (!noidung) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  if (!magiaodich) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  if (!time1) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  if (!hinhthucck) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });encodeURIComponent()
  if (!thoigianhientai) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });

    const response = await axios.get(`https://all.dungkon.id.vn/fakebill?name_gui=${encodeURIComponent(name_gui)}&stk_gui=${encodeURIComponent(stk_gui)}&bank=${encodeURIComponent(bank)}&code1=${encodeURIComponent(code1)}&code=${encodeURIComponent(code)}&stk=${encodeURIComponent(stk)}&name_nhan=${encodeURIComponent(name_nhan)}&amount=${encodeURIComponent(amount)}&noidung=${encodeURIComponent(noidung)}&magiaodich=${encodeURIComponent(magiaodich)}&time1=${encodeURIComponent(time1)}&hinhthucck=${encodeURIComponent(hinhthucck)}&thoigianhientai=${encodeURIComponent(thoigianhientai)}`, { responseType: 'arraybuffer' });

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