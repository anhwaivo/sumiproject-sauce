const axios = require('axios');

exports.name = '/checkdomain';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key

    const domain = req.query.domain;
    if (!domain) return res.status(400).json({ error: 'thiếu domain.' });

    const response = await axios.get(`http://ip-api.com/json/${domain}?fields=66846719`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};