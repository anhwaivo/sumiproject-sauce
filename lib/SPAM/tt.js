const axios = require('axios');

exports.name = '/tt';

exports.index = async (req, res, next) => {
  try {

    const username = req.query.username;
    const message = req.query.message;
    const amount = req.query.amount;
    if (!username)
            return res
                .status(400)
                .json({ error: "Vui lòng nhập username." });
                if (!message)
            return res
                .status(400)
                .json({ error: "Vui lòng nhập message." });
                if (!amount)
            return res
                .status(400)
                .json({ error: "Vui lòng nhập amount." });
                

    const response = await axios.get(`https://spamngl.dungkon.net/ngl?username=${username}&message=${encodeURIComponent(message)}&amount=${amount}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};