const axios = require('axios');
const fs = require('fs');
// const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/fbdow';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    // if (huydev(req, res)) return;

    const url = req.query.url;
    if (!url) return res.status(400).json({ error: 'Vui lòng nhập url.' });

    const response = await axios.get(`https://fbdow.dungkonapi.repl.co/fb?url=${url}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};