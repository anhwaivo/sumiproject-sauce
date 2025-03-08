const axios = require('axios');
const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/facebook/share';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    if (huydev(req, res)) return;

    const link = req.query.link;
    if (!link) return res.status(400).json({ error: 'Vui lòng nhập id bài viết' });
    const token = req.query.token;
    if (!token) return res.status(400).json({ error: 'Vui lòng nhập token.' });

    const response = await axios.get(`https://graph.facebook.com/me/feed?method=POST&link=https://m.facebook.com/${link}&published=0&access_token=${token}`);

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};