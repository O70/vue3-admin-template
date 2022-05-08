const { sourceService } = require('./service');

module.exports = async log => {
    const tree = await sourceService({
        url: '/api/admin/system/org/tree',
        method: 'GET'
    });

    console.log(tree);
};