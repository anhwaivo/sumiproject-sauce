const axios = require('axios');

exports.name = '/checkip';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key

    const ip = req.query.ip;
    if (!ip) return res.status(400).json({ error: 'thiếu ip.' });

    const response = await axios.get(`https://ipinfo.io/${ip}/json`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};