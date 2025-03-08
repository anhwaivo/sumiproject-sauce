const axios = require('axios');

exports.name = '/check-mail';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key

    const email = req.query.email;
    if (!email) return res.status(400).json({ error: 'thiếu gmail.' });

    const response = await axios.get(`https://mitai-project.dtaicute06.repl.co/check-mail?email=${email}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};