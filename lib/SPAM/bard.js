const axios = require('axios');
// const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/bard';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    // if (huydev(req, res)) return;

    const ask = req.query.ask;
    const url = req.query.url;
    if (!ask) return res.status(400).json({ error: 'Vui lòng nhập câu hỏi.' });

    const response = await axios.get(`https://joshweb.click/new/gemini?prompt=${encodeURIComponent(ask)}`);

    res.json({
      author: "Dũngkon",
      info: "https://www.facebook.com/nguyendinhtiendung.User",
      data: response.data.result.data
             });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};