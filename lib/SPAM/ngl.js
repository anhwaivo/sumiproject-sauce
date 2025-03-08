const axios = require('axios');
// const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/ngl';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key
    // if (huydev(req, res)) return;

    const username = req.query.username;
    if (!username) return res.status(400).json({ error: 'Vui lòng nhập username.' });
    const message = req.query.message;
    if (!message) return res.status(400).json({ error: 'Vui lòng nhập message.' });
    const amount = req.query.amount;
    if (!amount) return res.status(400).json({ error: 'Vui lòng nhập amount.' });
    const response = await axios.get(`https://spamngl.dungkon.net/ngl?username=${username}&message=${encodeURIComponent(message)}&amount=${amount}`);

    res.json({
      author: "Dũngkon",
      info: "https://www.facebook.com/dungkondev.tick/",
      data: response.data.result.reply
             });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};