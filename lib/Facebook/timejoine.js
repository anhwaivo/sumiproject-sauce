exports.name = '/facebook/timejoine';
const axios = require('axios');
const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.index = async (req, res, next) => {
  try {
      if (huydev(req, res)) return;
    const { data } = await axios.get(`https://graph.facebook.com/v1.0/${req.query.uid}?fields=id,name,created_time&access_token=EAAD6V7os0gcBO4c5ZAHAzJPW3PfxgaEyvtKtownKvgJ7xH3vBx2XaJQM4GSICpKJf9fJvNZCEHW4belFUMYtkWbezvFqZAUlTDe962Cp09KF9AggexghuI01KMNeebHLZA1Y00MV19k9AYcP65VLtRmO8gBVILmRCxYiWWrTao7WLrMBfqEeqVXxLwZDZD`,
    {
        headers: {
         cookie: "sb=47qfZZj9ZMgNEhG6QWMx1iLe;ps_n=0;ps_l=0;m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwAABbg4RwWmtz_pwETBRaa3v7U57wtAA%22%2C%222%22%3A%22GSwVQBxMAAAWZBaSg43cDBYAABV-HEwAABYAFpKDjdwMFgAAFigA%22%2C%2295%22%3A%22HCwAABbaAhaQ2qyoBRMFFpre_tTnvC0A%22%7D%2C%22d%22%3A%224bd36a1c-1d7f-4624-8ef8-65aa0e9515b6%22%2C%22s%22%3A%221%22%2C%22u%22%3A%22lsx4wl%22%7D;datr=L4zgZe_yKEYSnUNYrMqjZrLA;locale=vi_VN;c_user=100024871212620;m_page_voice=100024871212620;wd=1100x771;xs=38%3AFtYKzMT9XHfIXw%3A2%3A1710335772%3A-1%3A7526%3A%3AAcXwIcdMlTU9zPvu9Smo0btjJnMySKF0nXIsAbUlEIo;fr=1zdPrcLHzQqrhq78l.AWV50kloC5SxpuBoAqqXs-WOBJ4.Bl8cib..AAA.0.0.Bl8cib.AWV7gJ9LBeY;presence=C%7B%22lm3%22%3A%22g.8050020041690648%22%2C%22t3%22%3A%5B%7B%22o%22%3A0%2C%22i%22%3A%22g.7228097820537961%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.7406164196114165%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.4810190472336061%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.5426771387346988%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.7036877626339457%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.6969392176490264%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.6660494670706590%22%7D%5D%2C%22utc3%22%3A1710344347730%2C%22v%22%3A1%7D;"
        }
    });
    const createdTime = data.created_time;
    const day = createdTime.split("-")[2].split("T")[0];
    const month = createdTime.split("-")[1].split("T")[0];
    const year = createdTime.split("-")[0];
    const hour = createdTime.split("T")[1].split(":")[0];
    const min = createdTime.split(":")[1].split("+")[0];
    const ss = createdTime.split(":")[2].split("+")[0];
    const date = `${day}/${month}/${year}`;
    const time = `${hour}:${min}:${ss}`;
    res.json({
      uid: data.id,
      name: data.name,
      day: `${date}`,
      time: `${time}`,
      author: 'D农ngkon SUMIPROJECT'
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Tài khoàn die hoặc token api die vui lòng liên hệ admin' });
  }
};
