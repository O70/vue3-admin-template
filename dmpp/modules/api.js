const { sourceService, targetService } = require('./service');

module.exports = {
    dicts: function() {
        return targetService({
            url: '/dict',
            method: 'GET'
        }).then(data => data.map(it => ({ [it.code]: it })).reduce((p, c) => ({ ...p, ...c }), {}));
    }
};