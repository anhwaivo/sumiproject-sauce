/**
 * @swagger
 * /text/thinh:
 *   get:
 *     summary: Random câu thính.
 *     operationId: getRandomThinh
 *     description: Trả về những câu thính nhạt vcl.
 *     tags:
 *       - TEXT
 *     responses:
 *       200:
 *         description: Successful request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *                   description: Random tarot message URL.
 *                 count:
 *                   type: integer
 *                   description: Total number of tarot messages available.
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error details.
 */

exports.name = '/text/thinh';
exports.index = async(req, res, next) => {
    try {
        const girl = require('./data/json/thinh.json');
        var image = girl[Math.floor(Math.random() * girl.length)].trim();
        res.jsonp({
            data: image,
            count: girl.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}