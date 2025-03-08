const axios = require("axios");
const fs = require("fs");
//const huydev = require("../API_KEY/data/check.js").key_huydev;
exports.name = "/j&t";

exports.index = async (req, res, next) => {
    try {
        //if (huydev(req, res)) return;
        const billcode = req.query.billcode;
        if (!billcode)
            return res
                .status(400)
                .json({ error: "Vui lòng nhập số billcode." });

        const response = await axios({
            method: "POST",
            url: "https://staffapp.jtexpress.vn/jandt-vipcustomer-app/api/track/orderTrackLoginPage.do",
            headers: {
                    "Content-Type": "application/json",
            },
            data: JSON.stringify({
                sessionid: "",
                parameter: {
                    billcode: billcode,
                    lang: "vi",
                },
            }),
        });
        res.status(200).json(response.data);
        res.end(imageBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Sever nghẽn vui lòng thử lại sau." });
    }
};
