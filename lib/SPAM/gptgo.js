const axios = require('axios');
// const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/gptgo';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    // if (huydev(req, res)) return;

    const text = req.query.text;
    if (!text) return res.status(400).json({ error: 'Vui lòng nhập câu hỏi.' });

    const response = await axios.get(`https://api.kenliejugarap.com/gptgo/?text=${encodeURIComponent(text)}`);

    res.json({
      author: "Dũngkon",
      info: "https://www.facebook.com/nguyendinhtiendung.User",
      data: response.data.response
             });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};