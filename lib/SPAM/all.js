exports.name = '/all';
exports.index = async (req, res, next) => {
  const link = req.query.link;
  const keyAPi = ['32e64e6f3emshf0d6c60b556177ep1f983cjsn05e5f6948d51','32e64e6f3emshf0d6c60b556177ep1f983cjsn05e5f6948d51']
 var keyRandom = keyAPi[Math.floor(Math.random() * keyAPi.length)];
  //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
  if (!link) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });

  const axios = require('axios');

  const options = {
    method: 'POST',
    url: 'https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': keyRandom,
      'X-RapidAPI-Host': 'social-download-all-in-one.p.rapidapi.com'
    },
    data: { url: link }
  };

  try {
    const response = await axios.request(options);
    if (response.status === 200) {
      console.log(response.data);
      return res.json(response.data);
    } else {
      return res.json({ error: 'Có lỗi xảy ra khi tải xuống dữ liệu ' });
    }
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      return res.json({ error: error.response.data });
    } else if (error.request) {
      console.error('Error request:', error.request);
      return res.json({ error: 'Yêu cầu tới server không có phản hồi' });
    } else {
      console.error('Error:', error.message);
      return res.json({ error: 'Có lỗi xảy ra khi gửi yêu cầu' });
    }
  }
};
