const dict = require('./modules/dict');
const org = require('./modules/org');
const pedestal = require('./modules/pedestal');

dict();
// org();

// Promise.all(
//     dict()
//     // org()
// ).then(() => pedestal());
setTimeout(pedestal, 10000);


// dict().then(pedestal);

// async function run() {
//     const dicts = await dict(false);
//     console.log('a', dicts)
// }

// run();


// const fs = require('fs');
// const http = require('http');

// const config = fs.readFileSync('./config-local.json', "utf8");
// const { source, target } = JSON.parse(config);

// const options = {
//     headers: source.headers
// };

// function get(url, callback) {
//     http.get(`${config.url}${url}`, options, res => {
//         // const { statusCode } = res;
//         // console.log(statusCode)
    
//         res.setEncoding('utf8');
//         let raw = '';
//         res.on('data', chunk => { raw += chunk; });
//         res.on('end', () => callback(JSON.parse(raw).data));
//     });
// }

// // const dict = get('/dict/dictTree', data => {
// //     console.log(data)
// // })

// function initDict() {
//     const dictsStr = fs.readFileSync('./dicts.json', 'utf8');
//     const dicts = JSON.parse(dictsStr);
    
    
// }

// initDict();