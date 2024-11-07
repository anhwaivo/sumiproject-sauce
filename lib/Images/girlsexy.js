exports.name = '/video/girlsexy';
exports.index = async(req, res, next) => {
    try {
        const girlsexy = require('./data/json/girlsexy.json');
        var video = girlsexy[Math.floor(Math.random() * girlsexy.length)].trim();
        res.jsonp({
            url: video,
            count: girlsexy.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}