exports.name = '/soundcloud/search';
exports.index = async(req, res, next) => {
const s = req.query.s;
if (!s) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://soundcloud4.p.rapidapi.com/search',
  params: {
    query: s,
    type: 'all'
  },
  headers: {
    'X-RapidAPI-Key': '32e64e6f3emshf0d6c60b556177ep1f983cjsn05e5f6948d51',
    'X-RapidAPI-Host': 'soundcloud4.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  return res.json(response.data)
}).catch(function (error) {
	console.error(error);
});
}