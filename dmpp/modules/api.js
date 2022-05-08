const { sourceService, targetService } = require('./service');

export function getDicts() {
    return targetService({
        url: '/dict',
        method: 'GET'
    }).then(data => data.map(it => ({ [it.code]: it })));
}