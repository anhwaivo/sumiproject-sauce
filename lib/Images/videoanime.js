exports.name = '/video/videoanime';
exports.index = async(req, res, next) => {
    try {
        const videoanime = require('./data/json/videoanime.json');
        var video = videoanime[Math.floor(Math.random() * videoanime.length)].trim();
        res.jsonp({
            url: video,
            count: videoanime.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}