const axios = require('axios');

exports.name = '/capcut';

exports.index = async (req, res, next) => {
  try {

    const text = req.query.text;
    if (!text) return res.status(400).json({ error: 'thiếu dữ liệu.' });

    const response = await axios.get(`https://cc.devdungkon.io.vn/capcut?text=${encodeURIComponent(text)}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};