const axios = require('axios');
const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/facebook/gettokentocookie';

exports.index = async (req, res, next) => {
  try {
      if (huydev(req, res)) return;

    const cookie = req.query.cookie;
    if (!cookie) return res.status(400).json({ error: 'thiếu cookie.' });
    const id = req.query.id;
    if (!id) return res.status(400).json({ error: 'thiếu id.' });

    const response = await axios.get(`https://all.dungkon.id.vn/gettoken?id=${id}&cookie=${cookie}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi, vui lòng liên hệ admin.' + error });
  }
};