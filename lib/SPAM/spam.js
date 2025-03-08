const axios = require('axios');
const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/sms';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    if (huydev(req, res)) return;

    const phone = req.query.phone;
    if (!phone) return res.status(400).json({ error: 'Vui lòng nhập số điện thoại.' });

    const response = await axios.get(`https://8063b8fc-2243-46c9-8854-68c96644322b-00-3i6gctt8v9u4s.teams.replit.dev/?phone=${phone}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};