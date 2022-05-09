const modules = {
    dict: require('./modules/dict'),
    org: require('./modules/org'),
    pedestal: require('./modules/pedestal')
}

const [arg] = process.argv.slice(2);
const m = modules[arg];
m && m();