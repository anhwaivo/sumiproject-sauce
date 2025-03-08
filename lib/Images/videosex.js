exports.name = '/video/videosex';
exports.index = async(req, res, next) => {
    try {
        const sex = require('./data/json/videosex.json');
        var video = sex[Math.floor(Math.random() * sex.length)].trim();
        res.jsonp({
            url: video,
            count: sex.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}