const axios = require('axios');
exports.name = '/checkpn';
exports.index = async (req, res, next) => {
    const bienso = req.query.bienso;
    // const biensoxe = req.query.biensoxe;

    if (!bienso) return res.json({
        error: 'Thiếu biển số '
    });
    // if (!biensoxe) return res.json({
    //     error: 'Thiếu biển số xe'
    // });

    const options = {
        method: 'POST',
        url: 'https://api.checkphatnguoi.vn/phatnguoi',
        headers: {
     "accept": "*/*",
    "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://checkphatnguoi.vn/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        data: {
            bienso: bienso,
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return res.json(response.data);
    } catch (error) {
        console.error(error);
        return res.json({
            error: 'Có lỗi xảy ra khi tải tệp từ API'
        });
    }
};