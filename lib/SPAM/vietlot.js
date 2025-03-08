const axios = require('axios');
// const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/vietlot';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    // if (huydev(req, res)) return;

    const from = req.query.from;
    if (!from) return res.status(400).json({ error: 'Thiếu ngày bắt đầu.' });
    const to = req.query.to;
    if (!to) return res.status(400).json({ error: 'Thiếu ngày kết thúc.' });

    const response = await axios.get(`https://kqxs.trien.dev/api/vietlott/list/max3dpro?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);

    res.json({
      author: "Dũngkon",
      info: "https://www.facebook.com/nguyendinhtiendung.User",
      data: response.data
             });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};