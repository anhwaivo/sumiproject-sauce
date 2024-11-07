const axios = require('axios');
// const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/igdowload';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    // if (huydev(req, res)) return;

    const link = req.query.link;
    if (!link) return res.status(400).json({ error: 'Vui lòng nhập link.' });

    const response = await axios.get(`https://all.dungkon.id.vn/instagramdown?link=${encodeURIComponent(link)}`);

    res.json({
      author: "Dũngkon",
      info: "https://www.facebook.com/dungkondev.tick/",
      data: response.data
             });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};