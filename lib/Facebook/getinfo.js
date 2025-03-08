exports.name = '/facebook/getinfo';
const axios = require('axios')
const huydev = require('../API_KEY/data/check.js').key_huydev;
function convert(time){
  var date = new Date(`${time}`);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var formattedDate = `${ day < 10 ? "0" + day : day}` + "/" +`${ month < 10 ? "0" + month : month}` + "/" + year + "||" + `${ hours < 10 ? "0" + hours : hours}` + ":" + `${ minutes < 10 ? "0" + minutes : minutes}` + ":" + `${ seconds < 10 ? "0" + seconds : seconds}`;
return formattedDate;
}
exports.index = async (req, res, next) => {
    if (huydev(req, res)) return;
  const axios = require("axios");
axios.get(`https://graph.facebook.com/v1.0/${req.query.uid}?fields=id,is_verified,cover,created_time,work,hometown,username,link,name,locale,location,about,website,birthday,gender,relationship_status,significant_other,quotes,first_name,subscribers.limit(0)&access_token=EAAD6V7os0gcBO4c5ZAHAzJPW3PfxgaEyvtKtownKvgJ7xH3vBx2XaJQM4GSICpKJf9fJvNZCEHW4belFUMYtkWbezvFqZAUlTDe962Cp09KF9AggexghuI01KMNeebHLZA1Y00MV19k9AYcP65VLtRmO8gBVILmRCxYiWWrTao7WLrMBfqEeqVXxLwZDZD`,{
        headers: {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like) Version/12.0 eWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
          "accept": "application/json, text/plain, /",
         cookie: "sb=eKKAY7ArB12wNgYT_RODy7oB; datr=eaKAYzrxFe5qTVrlnmpBVn7Q; c_user=100000225673860; m_page_voice=100000225673860; wd=1920x963; xs=12%3A7KRB9gGQwaHt5g%3A2%3A1689598822%3A-1%3A6290%3A%3AAcW5-pEJJ7GoVdfiYQoo0A4VUNvOjtOqfk9iIzBoiMwB; fr=0iOsfQ339brjlxFQJ.AWXD5lYuTSLZsasLjjiskaLUDi8.Bk8hHq.Pj.AAA.0.0.Bk8hHq.AWX8yFB8Gvk; presence=C%7B%22lm3%22%3A%22u.100079086835283%22%2C%22t3%22%3A%5B%7B%22o%22%3A0%2C%22i%22%3A%22u.100039986310453%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100065586904588%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100074100303075%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100038780015811%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.7444167328943151%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100082668132301%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.1207110219342973%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100001761237574%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100087438951039%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100005201702431%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100014958216759%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.8321062807935493%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100037741424837%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.5988765337888667%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100077497896569%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100071768980176%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100063855025744%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100046691234633%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.6947890241890495%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.4316745955077359%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.9891986724174760%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.4853893041400316%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100044832440420%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100029340348630%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.5668747433145242%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.1664397623%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.6924951360869970%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100011663281378%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100075493308135%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.24136113082654624%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.6426651960726120%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100092674113587%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.7215618755120081%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.5361215824007861%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.6844521818997745%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100000692804831%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100054391143845%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100033992950950%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100028356152567%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100003255692360%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100064535052970%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100030967444445%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.6362141067212155%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100063456296135%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100090035004488%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100089352882349%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100076344452639%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.6351983704849926%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.1496041630%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100030050717942%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100005845206394%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100074802690241%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100081316312557%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100073926923961%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100040945304427%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100025576475462%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22u.100040714093705%22%7D%2C%7B%22o%22%3A0%2C%22i%22%3A%22g.8050020041690648%22%7D%5D%2C%22utc3%22%3A1693586670019%2C%22v%22%3A1%7D"
        }
      }).then(resp => {
  
  var dj = {
    name: resp.data.name,
    link_profile: resp.data.link,
    uid: resp.data.id,
    first_name: resp.data.first_name,
    username: resp.data.username,
    created_time : convert(resp.data.created_time),
    web: resp.data.website || "Không có dữ liệu!",
    gender: resp.data.gender,
    relationship_status: resp.data.relationship_status || "Không có dữ liệu!",
    love: resp.data.significant_other || "Không có",
    birthday: resp.data.birthday || "Sinh nhật private", 
    follower: resp.data.subscribers.summary.total_count || "Không công khai",
    tichxanh: resp.data.is_verified,
    avatar: `https://graph.facebook.com/${resp.data.id}/picture?width=1500&height=1500&access_token=2712477385668128%7Cb429aeb53369951d411e1cae8e810640`,
    quotes: resp.data.quotes || "Không có dữ liệu!",
    about: resp.data.about || "Không có dữ liệu!",
    locale: resp.data.locale,
    location: !!resp.data.location?resp.data.location.name:undefined,
    hometown: !!resp.data.hometown?resp.data.hometown.name:undefined,
    cover : !!resp.data.source?resp.data.source:undefined,
    work: resp.data.work,
    author: "https://www.facebook.com/nguyendinhtiendung.User"
  }
  res.json(dj)
}).catch(e =>{
  console.log(e)
  res.status(500).json({ error: 'Tài khoàn die hoặc token api die vui lòng liên hệ admin' });
})
          }