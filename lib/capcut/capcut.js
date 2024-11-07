
const axios = require('axios');
const request = require('request');
exports.name = '/capcut/down';
exports.index = async(req, res, nex) => {
  const { url } = req.query;
  if (!url) return res.json({ error: 'Thiếu dữ liệu để khởi chạy' });
const options = {
            method: 'GET',
            headers: {
'Connection':'keep-alive',
'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
//Accept-Encoding:gzip, deflate, br
'Cookie':'_ga_F9J0QP63RB=GS1.1.1693483412.3.1.1693485431.0.0.0; msToken=-82pNAE8BFyZ-tu-RGWUSTw4PBt6FDoBgi9eY4cfQYzeh6v41K9iR39jnvT44Pij0eQOTMOwqBmxtBZ6KOat_hkzYsq21jeBrDKwaVRZPcQ=; _ut=context%253DReferer%2526source%253Dcapcut.com%2526medium%253DCapCut%2526sub_source%253Dwww.capcut.com%252Fvi-vn%252F%2526channel_from%253Dut%2526session_start_url%253Dhttps%253A%252F%252Fwww.capcut.com%252Fvi-vn%252Ftemplates; ttwid=1|FphYERClk5RpAvwUSyaDYU0G2oMTv-qPi_I01y3p0a8|1693485429|9d0c0066a9200deb451ddbafd7ffdbe0099d9370d5a6380cbf2206c21f842e0a; _tea_web_id=7270400480823674369; _ga=GA1.2.717407250.1693406365; _gid=GA1.2.579875393.1693483199; ug_capcut_locale=vi-VN; odin_tt=a0b8a4933848546f07b18b694dbe65c1d22add2b917ad94d63188c94b388ca9bd73c4695767529f44528a34893165147ce699c55130ac8bc67f94fa50cd479fd; sessionid=0df034e36b1e153acbd8a6dd1045ad78; sessionid_ss=0df034e36b1e153acbd8a6dd1045ad78; sid_guard=0df034e36b1e153acbd8a6dd1045ad78%7C1688607676%7C5184000%7CMon%2C+04-Sep-2023+01%3A41%3A16+GMT; sid_tt=0df034e36b1e153acbd8a6dd1045ad78; sid_ucp_v1=1.0.0-KGI2NDg2NTAzM2UxNWVmNzI1ZjA4MWFhNjA5YThjYzFmMTgxMDA5MjcKIAiCiL2m6vKG02QQvLeYpQYYnKAVIAwwvLeYpQY4CEASEAMaA3NnMSIgMGRmMDM0ZTM2YjFlMTUzYWNiZDhhNmRkMTA0NWFkNzg; ssid_ucp_v1=1.0.0-KGI2NDg2NTAzM2UxNWVmNzI1ZjA4MWFhNjA5YThjYzFmMTgxMDA5MjcKIAiCiL2m6vKG02QQvLeYpQYYnKAVIAwwvLeYpQY4CEASEAMaA3NnMSIgMGRmMDM0ZTM2YjFlMTUzYWNiZDhhNmRkMTA0NWFkNzg; store-country-code=vn; store-country-code-src=uid; store-idc=maliva; uid_tt=c585088c833fc094c5eac9e0ff554053580797140f3fdab1134adee85b53a5ba; uid_tt_ss=c585088c833fc094c5eac9e0ff554053580797140f3fdab1134adee85b53a5ba; passport_csrf_token=c46a352879e2604d7daff4d3024c26eb; passport_csrf_token_default=c46a352879e2604d7daff4d3024c26eb; capcut_locale=vi-VN',
'Host':'www.capcut.com',
'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1',
'Accept-Language':'vi-VN,vi;q=0.9',
'Sec-Fetch-Mode':'navigate',
'Sec-Fetch-Site':'none',
'Sec-Fetch-Dest':'doc'
            }
        };
        axios.request(options).then(function(response) {
          const getData = response.data
          const data = getData.split('"templateDetail":{')[1].split('"structuredData"')[0]
          const title = data.split('"title":"')[1].split('","')[0]
          //console.log('Title: ' + title)
          const desc = data.split('"desc":"')[1].split('","')[0]
          //console.log('Mô tả: ' + desc)
          const getUrl = data.split('"videoUrl":"')[1].split('","')[0]
          const videoUrl = decodeURIComponent(JSON.parse('"' + getUrl.replace(/\"/g, '\\"') + '"'))
          //console.log('Video: ' + videoUrl)
          const playAmount = data.split('"playAmount":')[1].split(',"')[0]
          //console.log('Lượt xem: ' + playAmount)
          const usageAmount = data.split('"usageAmount":')[1].split(',"')[0]
          //console.log('Lượt dùng: ' + usageAmount)
          const likeAmount = data.split('"likeAmount":')[1].split(',"')[0]
          //console.log('Lượt thích: ' + likeAmount)
          const commentAmount = data.split('"commentAmount":')[1].split(',"')[0]
          //console.log('Bình luận: ' + commentAmount)
          //tới đây thui lười convert time & duration quá
          data = {
            tieude : 'title' + title,
            mota : 'desc' + desc,
            videUrl : 'video' + videoUrl,
            luotxem : 'luotxem' + playAmount,
            luotdung : 'luotdung' + usageAmount,
            luotthich : 'Lượt thích' + likeAmount,
            cmt : 'Bình luận' + commentAmount,
            author: 'nnl'
            return res.jsonp({ data });
        }).catch(function(error) {
          return res.jsonp({ error: 'Không thể tìm thấy dữ liệu video này')};
        });
}