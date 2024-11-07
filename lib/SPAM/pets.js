exports.name = '/pets';
exports.index = async (req, res, next) => {
  const name = req.query.name;
  if (!name) return res.status(400).json({ error: 'Hãy nhập tên trợ thủ' });
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://ff.garena.com/api/pet/list?lang=vn&page=1&size=12&name='+name,
  headers: {
    "accept": "application/json, text/plain, */*",
    "accept-language": "vi,en-US;q=0.9,en;q=0.8",
    "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "B6FksShzIgjfrYImLpTsadjS86sddhFH",
    "cookie": "_gid=GA1.2.1708119717.1713274606; _ga_RF9R6YT614=GS1.1.1713278714.2.1.1713278858.0.0.0; _ga=GA1.2.1026139558.1713274606; _gat_gtag_UA_207309476_25=1; _ga_KE3SY7MRSD=GS1.1.1713278714.2.1.1713278872.0.0.0",
    "Referer": "https://ff.garena.com/vn/pets/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  data: {
    name: name
  }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Có lỗi xảy ra khi sử dụng dịch vụ AI Drawing' });
  }
};
