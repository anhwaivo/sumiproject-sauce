const axios = require('axios');
const fs = require('fs');
// const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/imgai';

exports.index = async (req, res, next) => {
  try {
    // if (huydev(req, res)) return;
    const prompt = req.query.prompt;
    if (!prompt) return res.status(400).json({ error: 'Vui lòng nhập prompt.' });
    const model = req.query.model;
    if (!model) return res.status(400).json({ error: 'Vui lòng nhập model.' });

    const response = await axios.get(`https://te.sumiteam.repl.co/generate?prompt=${encodeURIComponent(prompt)}&model=${encodeURIComponent(model)}`);

      res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};