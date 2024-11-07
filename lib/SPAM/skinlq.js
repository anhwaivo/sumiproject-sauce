const axios = require('axios');

exports.name = '/skinlq';

exports.index = async (req, res, next) => {
  try {

    const response = await axios.get(`https://devdungkon.io.vn/aov/hero/skins/`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};