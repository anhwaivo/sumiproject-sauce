const axios = require('axios');
// const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/iginfo';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    // if (huydev(req, res)) return;

    const user = req.query.user;
    if (!user) return res.status(400).json({ error: 'Vui lòng nhập user.' });

    const response = await axios.get(`https://all.dungkon.id.vn/instagram/infouser?ig=${encodeURIComponent(user)}`);

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