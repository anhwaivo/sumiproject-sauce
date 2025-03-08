const axios = require('axios');

exports.name = '/note';

exports.index = async (req, res, next) => {
  try {

    const response = await axios.get(`https://api.dungkon.id.vn/note/:UUID`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};