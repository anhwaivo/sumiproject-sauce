exports.name = '/kun';
const axios = require("axios");
const qs = require("qs");
const Canvas = require("canvas");


exports.index = async (req, res, next) => {
  const username = req.query.username;
  const genderss = req.query.gender;
  //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
  if (!username || username.length > 13) return res.json({ error: 'Vui lòng nhập tên tối đa 13 ký tự ' });
  if (!genderss || genderss < 0 || genderss > 1) return res.json({ error: 'Thiếu giới tính (0 gái 1 nam)' });

  async function generatorPostcard(userName , genders) {
   const canvas = Canvas.createCanvas(800, 1000);
   const ctx = canvas.getContext('2d');
   let positionY = [784, 756, 665, 727, 672, 795, 686];
   let longName = [0, 3, 4, 6];
   let postcard = Math.floor(Math.random() * positionY.length);
   if (userName.length > 9) postcard = longName[Math.floor(Math.random() * longName.length)];
   // Nữ 0, Nam 1
   const gender = genders;
   let prefixs = [
        'Con cảm ơn cô/chú ',
        'Con cảm ơn cô/chú ',
        'Con thích sữa cô/chú ',
        'Con cảm ơn cô/chú ',
        'Con cảm ơn cô/chú ',
        'Con cảm ơn cô/chú ',
        'cô/chú '
    ];

    // Mảng chứa hậu tố của câu chúc cần chèn
    let suffixes = [
        '',
        ' ạ',
        ' gửi lắm',
        '',
        '',
        ' nhiều ạ!',
        ' gửi cho con rồi ạ'
    ];

    let prefix = prefixs[postcard];
    if (gender == 0) prefix = prefix.replace("cô/chú", "cô");
    else if (gender == 1) prefix = prefix.replace("cô/chú", "chú");
    let suffixe = suffixes[postcard];
    Canvas.registerFont(__dirname + `https://drive.google.com/uc?export=download&id=1Dp1TRbw2LZb474gmly14JlNqyMVK9LM0`, {
        family: "Pecita"
    });
    var img = await Canvas.loadImage('https://suakunchoem.idp.vn/images/postcards/' + (postcard + 1) + '.jpg');


    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.font = '37px Pecita';
    ctx.textBaseline = "middle";
    var parts = [
            { text: prefix, color: "black" },
            { text: userName, color: "red" },
            { text: suffixe, color: "black" }
        ];
    var totalWidth = 0;
        parts.forEach(function(part) {
            totalWidth += ctx.measureText(part.text).width;
        });

         var x = (canvas.width - totalWidth) / 2;
        var y = positionY[postcard];
        parts.forEach(function(part) {
            ctx.fillStyle = part.color; // Đặt màu cho từng phần
            ctx.fillText(part.text, x, y); // Vẽ văn bản

            // Cập nhật vị trí x cho phần văn bản tiếp theo
            x += ctx.measureText(part.text).width;
        });

  await postCreateCard(userName, (postcard + 1))
  var path_toilet = __dirname+'/postcards.png'; 

  const imageBuffer = Buffer.from(canvas.toBuffer(), 'binary');

    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': imageBuffer.length
    });
    res.end(imageBuffer);
 
} 
 await generatorPostcard(username, genderss)

};

async function postCreateCard(username, postcardName) {
  const { data } = await axios({
    method: "POST",
    url: "https://suakunchoem.idp.vn/api/post-card",
    data: qs.stringify({
      username, 
      postcardName
    })
  });
  console.log(data)
  return data;
}