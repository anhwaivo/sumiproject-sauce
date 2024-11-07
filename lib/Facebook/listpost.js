const axios = require('axios');
const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/facebook/posts';

exports.index = async (req, res, next) => {
  try {
      if (huydev(req, res)) return;
    const token = "EAAD6V7os0gcBO4c5ZAHAzJPW3PfxgaEyvtKtownKvgJ7xH3vBx2XaJQM4GSICpKJf9fJvNZCEHW4belFUMYtkWbezvFqZAUlTDe962Cp09KF9AggexghuI01KMNeebHLZA1Y00MV19k9AYcP65VLtRmO8gBVILmRCxYiWWrTao7WLrMBfqEeqVXxLwZDZD";

    const uid = req.query.uid;
    if (!uid) return res.status(400).json({ error: 'thiếu uid.' });

    const response = await axios.get(`https://graph.facebook.com/${uid}?fields=id,likes,family,posts&access_token=${token}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Tài khoàn die hoặc token api die vui lòng liên hệ admin.' });
  }
};