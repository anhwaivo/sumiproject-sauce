const axios = require('axios');
const fs = require('fs');
 const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/texttoimage';

exports.index = async (req, res, next) => {
  try {
     if (huydev(req, res)) return;
    const prompt = req.query.prompt;
    if (!prompt) return res.status(400).json({ error: 'Vui lòng nhập prompt.' });

    const response = await axios.get(`https://all.dungkon.id.vn/texttoimage?prompt=${encodeURIComponent(prompt)}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};