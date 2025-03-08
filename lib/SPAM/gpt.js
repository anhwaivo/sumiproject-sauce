const axios = require('axios');

exports.name = '/chatgpt';

exports.index = async (req, res, next) => {
  try {

    const q = req.query.q;
    if (!q) return res.status(400).json({ error: 'Thiếu câu hỏi.' });

    const response = await axios.get(`https://res.thenamk3.love/gpt?query=${encodeURIComponent(q)}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};