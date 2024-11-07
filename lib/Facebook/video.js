exports.name = '/facebook/video';
'use strict';
const axios = require('axios')
exports.index = async (req, res, next) => {
  var url = req.query.url
  var axios = require("axios");
  var data = {
    "sec-fetch-user": "?1",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-site": "none",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "cache-control": "max-age=0",
    authority: "www.facebook.com",
    "upgrade-insecure-requests": "1",
    "accept-language": "en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6",
    "sec-ch-ua": '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    cookie: "sb=aH-fZrlR8wVCZJ9RU4gBZaqm;datr=aH-fZiIX-oeF-5APsLsoV-RN;ps_n=1;ps_l=1;ar_debug=1;c_user=100089195796584;xs=5%3AhCZGLsqjgel8qA%3A2%3A1727541058%3A-1%3A6276%3A%3AAcUzZfTrSJRR4CeDC3ixOoePmeJs_TbUiGHimwE4Npw;wd=1920x953;fr=18VX9r3dB9gO3s1og.AWWyu77gfrEa4k8P63z8WAGXYDU.Bm_pgR..AAA.0.0.Bm_plV.AWWawpjwKRM;presence=C%7B%22lm3%22%3A%22g.8050020041690648%22%2C%22t3%22%3A%5B%7B%22o%22%3A0%2C%22i%22%3A%22g.25913166924997476%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22sc.26521718664093556%22%7D%5D%2C%22utc3%22%3A1727961442014%2C%22v%22%3A1%7D;"
  };
  /**
   * @param {string} callbackId
   * @return {?}
   */
  var wrap = function getValue(callbackId) {
    return JSON.parse('{"text": "' + callbackId + '"}').text;
  };
  return new Promise(function(resolve) {
    if (!url || !url.trim()) {
      return res.jsonp("Thiếu url facebook");
    }
    if (!url.includes("facebook.com")) {
      return res.jsonp("Vui lòng nhập video facebook hợp lệ!");
    }
    axios.get(url, {
      headers: data
    }).then(function(rawResponse) {
      var data = rawResponse.data;
      var nodes = data.match(/"browser_native_sd_url":"(.*?)"/);
      var match = data.match(/"browser_native_hd_url":"(.*?)"/);
      var object = data.match(/"preferred_thumbnail":{"image":{"uri":"(.*?)"/);
      if (nodes && nodes[1]) {
        var result = {
          url: url,
          sd: wrap(nodes[1]),
          hd: match && match[1] ? wrap(match[1]) : "",
          thumbnail: object && object[1] ? wrap(object[1]) : ""
        };
        res.jsonp(result);
      } else {
        res.jsonp("Cookie die hoặc lỗi nên không thể tải video!");
      }
    });
  });
}