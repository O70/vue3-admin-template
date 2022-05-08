const axios = require('axios');

const { source, target } = require('./config-local');

const sourceService = axios.create(Object.assign(source.options));
sourceService.interceptors.response.use(
    response => {
        console.log('gsss')
        const { code, data, message } = response.data;
        
        code !== 20000 && console.error('Source service:', message)
        
        return data;
    },
    error => console.log('Source service:', error)
);

const targetService = axios.create(Object.assign(target.options));
targetService.interceptors.response.use(
    response => {
        const { code, data, message } = response.data;
        
        code !== 20000 && console.error('Target service:', message)
        
        return data;
    },
    error => console.log('Target service:', error)
);

module.exports = {
    sourceService,
    targetService
};