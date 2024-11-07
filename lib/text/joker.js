exports.name = '/text/joker';
exports.index = async(req, res, next) => {
    try {
        const gai = require('./data/json/joker.json');
        var video = gai[Math.floor(Math.random() * gai.length)].trim();
        res.jsonp({
            url: video,
            count: gai.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}