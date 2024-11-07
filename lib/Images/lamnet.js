const axios = require("axios");

exports.name = '/image/upscale';
exports.index = async (req, res, next) => {
  const link = req.query.link;
  if (!link)
    return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
  try {
    const response = await axios.post(`https://upscaler.zyro.com/v1/ai/image-upscaler`, {
      // encode to base64
      image_data: 'data:image/jpeg;base64,' + await axios.get(link, { responseType: 'arraybuffer' }).then((response) => Buffer.from(response.data, 'binary').toString('base64'))
    });
    const imageBase64 = response.data.upscaled.slice(response.data.upscaled.indexOf(',') + 1);
    res.set('Content-Type', 'image/png');
    res.send(Buffer.from(imageBase64, 'base64'));

  }
  catch (error) {
    //console.log(error);
    res.status(500).send({ error: 'Không thể xử lý ảnh này' });
  }
};
