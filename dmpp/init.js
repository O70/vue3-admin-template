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
