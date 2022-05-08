const dict = require('./modules/dict');
const org = require('./modules/org');
const pedestal = require('./modules/pedestal');

dict();
// org();

setTimeout(pedestal, 10000);
