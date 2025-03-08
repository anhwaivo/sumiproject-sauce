const axios = require('axios');
// const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/gpt4';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    // if (huydev(req, res)) return;

    const q = req.query.q;
    if (!q) return res.status(400).json({ error: 'Vui lòng nhập câu hỏi.' });
    const response = await axios.get(`https://joshweb.click/new/gpt-4_adv?prompt=${encodeURIComponent(q)}`);

    res.json({
      author: "Dũngkon",
      info: "https://www.facebook.com/dungkondev.tick/",
      data: response.data.result.reply
             });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};