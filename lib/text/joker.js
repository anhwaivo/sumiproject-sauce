/**
 * @swagger
 * /text/joker:
 *   get:
 *     summary: Random câu nói joker.
 *     operationId: getRandomJoker
 *     description: Trả về những câu nói của joker.
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