const axios = require('axios');
const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.name = '/checkuytin';

exports.index = async (req, res, next) => {
  try {

    if (huydev(req, res)) return;

    const response = await axios.get(`https://checkscam.id.vn/api/uytin10diem.php`);

    res.json({
      credit: "DũngKon",
      lien_he: "https://www.facebook.com/nguyendinhtiendung.User",
      thong_tin: "LẤY THÔNG TIN TẠI WEBSITE checkscam.id.vn",
      data: response.data}
            );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sever nghẽn vui lòng thử lại sau.' });
  }
};