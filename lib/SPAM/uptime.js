const axios = require('axios');

exports.name = '/uptime';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key

    const link = req.query.link;
    if (!link) return res.status(400).json({ error: 'thiếu link cần treo uptime.' });
     const time = req.query.time;
    if (!time) return res.status(400).json({ error: 'thiếu time request (tính bằng giây).' });

    const response = await axios.get(`https://treo-link.sumiteam.repl.co/addUrl?link=${link}&seconds=${time}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};