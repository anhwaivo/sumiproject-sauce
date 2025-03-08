
const axios = require('axios');
exports.name = '/facebook/getapptocokie';

exports.index = async (req, res, next) => {
  try {

    const cookie = req.query.cookie;
    if (!cookie) return res.status(400).json({ error: 'thiếu cookie.' });

    const response = await axios.get(`https://all.dungkon.id.vn/convert?cookie=${cookie}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi.' + error});
  }
};