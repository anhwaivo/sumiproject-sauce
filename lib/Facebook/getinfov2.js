const axios = require('axios');
const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/facebook/getinfov2';

exports.index = async (req, res, next) => {
  try {
      if (huydev(req, res)) return;
    const token = "EAAD6V7os0gcBO4c5ZAHAzJPW3PfxgaEyvtKtownKvgJ7xH3vBx2XaJQM4GSICpKJf9fJvNZCEHW4belFUMYtkWbezvFqZAUlTDe962Cp09KF9AggexghuI01KMNeebHLZA1Y00MV19k9AYcP65VLtRmO8gBVILmRCxYiWWrTao7WLrMBfqEeqVXxLwZDZD";

    const uid = req.query.uid;
    if (!uid) return res.status(400).json({ error: 'thiếu uid.' });

    const response = await axios.get(`https://graph.facebook.com/${uid}?fields=id,is_verified,cover,updated_time,work,education,likes,created_time,work,posts,hometown,username,family,timezone,link,name,locale,location,about,website,birthday,gender,relationship_status,significant_other,quotes,first_name,subscribers.limit(0)&access_token=${token}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Tài khoàn die hoặc token api die vui lòng liên hệ admin.' });
  }
};