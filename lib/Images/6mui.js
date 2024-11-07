exports.name = '/video/6mui';
exports.index = async(req, res, next) => {
    try {
        const saumui = require('./data/json/saumui.json');
        var video = saumui[Math.floor(Math.random() * saumui.length)].trim();
        res.jsonp({
            url: video,
            count: saumui.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}