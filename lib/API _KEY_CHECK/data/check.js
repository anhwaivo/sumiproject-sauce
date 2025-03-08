function key_dungkon(req, res, next) {
  const fs = require('fs-extra');
  try {
    const data_apikey = require('./keyapi.json');
    const apikey = req.query.apikey;
    
    const dungkon2002 = data_apikey.find(i => i.apikey === apikey);

    if (!dungkon2002) {
      return res.json({
        error: 'APIKEY không chính xác'
      });
    } else {
      if (dungkon2002.request === 0) {
        return res.json({
          error: 201,
          message: 'APIKEY của bạn đã hết lượt request'
        });
      } else {
        // Trừ đi 1 lượt request và ghi vào file
        if (dungkon2002.keytype == 'Free') {
        dungkon2002.request = dungkon2002.request - 1;
        fs.writeFileSync(__dirname + '/keyapi.json', JSON.stringify(data_apikey, null, 2), 'utf-8');

      }
    }
                                         }
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  key_dungkon
};