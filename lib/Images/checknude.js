exports.name = '/checknude';
exports.index = async(req, res, next) => {
    const request = require('request');
    var link = req.query.link
    if (!link) return res.jsonp({ error: 'Thiếu dữ liệu' });
    var keyAPi = ['718666fe27msha3d76d92bdc47b1p1b6c5bjsnb96eaa8b5170', '1b20ad47f6msh84b3688bbce2c15p1919c9jsn782265672a3a']
    var keyRandom = keyAPi[Math.floor(Math.random() * keyAPi.length)];
    const options = {
        method: 'POST',
        url: 'https://nsfw-image-classification1.p.rapidapi.com/img/nsfw',
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'nsfw-image-classification1.p.rapidapi.com',
            'x-rapidapi-key': keyRandom,
            useQueryString: true
        },
        body: {
            url: link
        },
        json: true
    };
    request(options, function(error, response, body) {
        if (error) return res.jsonp({ error: 'Không thể xử lí yêu cầu của bạn' })
        const data = body.NSFW_Prob * 100
        res.jsonp({
            data: Number(data.toFixed(0)),
            NSFW_Prob: data.toFixed(0) + '%'
        })
    });
}