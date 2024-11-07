const axios = require('axios');
const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/spamsms';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    if (huydev(req, res)) return;

    const phone = req.query.phone;
    if (!phone) return res.status(400).json({ error: 'Vui lòng nhập số điện thoại.' });
     const luot = req.query.luot;
    if (!luot) return res.status(400).json({ error: 'Vui lòng nhập số lần.' });
     const delay = req.query.delay;
    if (!delay) return res.status(400).json({ error: 'Vui lòng time delay.' });

    const response = await axios.get(`https://sms.dungkon.id.vn/spam?sdt=${phone}&luot=${luot}&delay=${delay}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};