const axios = require('axios');
// const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/doitien';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    // if (huydev(req, res)) return;

    const amount = req.query.amount;
    if (!amount) return res.status(400).json({ error: 'thiếu số tiền vnd.' });
    const response = await axios.get(`https://www.exchange-rates.org/vn/api/v2/rates/lookup?isoTo=USD&isoFrom=VND&amount=${encodeURIComponent(amount)}&pageCode=ConverterForPair`);

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