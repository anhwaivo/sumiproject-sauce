const Monitor = require('ping-monitor');
const notifier = require('node-notifier');

const myMonitor = new Monitor({
    address: '127.0.0.1',//change the ip address of the web to run the bot or leave 127.0.0.1 also known as localhost nha bruh( just for pro 🐧)
    port: 8181, //port bot 
    interval: 10, // 10 giây
  config: {
    intervalUnits: 'seconds', // minutes, seconds,hour
    generateId: false // defaults is true
  }
});


myMonitor.on('up', function (res, state) {
    console.log('Check Connected : ' + res.address + ':' + res.port + ' Is Online !'); //ping 
});


myMonitor.on('down', function (res, state) {
    console.log('Check Connected : ' + res.address + ':' + res.port + ' Is Offline !');
      return notifier.notify({title: 'Check Connected',message: 'Dead Bot =))'});// noti
});


myMonitor.on('stop', function (res, state) {
    console.log(res.address + ' monitor has stopped.');
      return notifier.notify({title: 'Check Connected',message: 'Dead Bot =))'});
});


myMonitor.on('error', function (error, res) {
    console.log(error);
    return notifier.notify({title: 'Check Connected',message: 'Bot Damn it =))'});
});


myMonitor.on('timeout', function (error, res) {
    console.log(error);
      return notifier.notify({title: 'Check Connected',message: 'Bot Damn it =))'});
});