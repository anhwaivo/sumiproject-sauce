const axios = require('axios');
const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/steam';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    if (huydev(req, res)) return;

    const q = req.query.q;
    if (!q) return res.status(400).json({ error: 'Thiếu tên game trên steam.' });

    const response = await axios.get(`https://api.popcat.xyz/steam?q=${q}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};