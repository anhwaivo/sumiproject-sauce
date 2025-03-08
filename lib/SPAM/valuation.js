const axios = require('axios');

exports.name = '/valuation';

exports.index = async (req, res, next) => {
  try {
    // Xác thực API Key

    const sdt = req.query.sdt;
    if (!sdt) return res.status(400).json({ error: 'thiếu số điện thoại.' });

    const response = await axios.get(`https://api.sim.vn/valuation/index?sim=${sdt}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};