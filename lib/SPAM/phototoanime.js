exports.name = "/phototoanime";

const axios = require('axios');

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key

    const url = req.query.url;
    if (!url) return res.status(400).json({ error: 'thiếu URL.' });

    const response = await axios.get(`https://apis.dungkon.me/phototoanime?url=${url}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};