const axios = require('axios');

exports.name = '/itt';

exports.index = async (req, res, next) => {
  try {

    const img = req.query.img;

    const response = await axios.get(`https://free-api.ainz-sama101.repl.co/others/itt?url=${img}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};