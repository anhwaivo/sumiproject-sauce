/**
 * @swagger
 * /text/thayboi:
 *   get:
 *     summary: Random câu nói tarot.
 *     operationId: getRandomThayboi
 *     description: Trả về những câu bói tarot.
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

exports.name = '/text/thayboi';

exports.index = async (req, res, next) => {
    try {
        const gai = require('./data/json/thayboi.json');
        const video = gai[Math.floor(Math.random() * gai.length)].trim();
        res.jsonp({
            url: video,
            count: gai.length
        });
    } catch (e) {
        res.status(500).jsonp({ error: e.message });
    }
};
