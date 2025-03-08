const axios = require('axios');

exports.name = '/matinh';

exports.index = async (req, res, next) => {
  try {

    const s = req.query.s;

    const response = await axios.get(`https://res.thenamk3.love/v2/tien-ich/ma-tinh-tp?s=${s}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};