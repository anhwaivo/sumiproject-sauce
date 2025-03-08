const axios = require('axios');
const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/facebook/spamcmt';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    if (huydev(req, res)) return;

    const id = req.query.link;
    if (!id) return res.status(400).json({ error: 'Vui lòng nhập id bài viết' });
    const cmt = req.query.cmt;
    if (!cmt) return res.status(400).json({ error: 'Vui lòng nhập nội dung cmt.' });
    const token = req.query.token;
    if (!token) return res.status(400).json({ error: 'Vui lòng nhập token.' });

    const response = await axios.get(`https://graph.facebook.com/${id}/comments?method=POST&message=${cmt}&access_token=${token}`);

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};