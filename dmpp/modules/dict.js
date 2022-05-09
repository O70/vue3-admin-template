const fs = require('fs');
const { targetService } = require('./service');

function add(data) {
    return targetService({
        url: '/dict',
        method: 'POST',
        data
    });
}

let count = 1;
const addChildren = async (parent, children, log) => {
    children.forEach(async ({ label: name, code, children }, ind) => {
        count++;
        log && console.log(`${count}`.padStart(2, ' '), { name, code });

        const dict = await add({
            name,
            code,
            level: `${parent.level}${`${ind + 1}`.padStart(6, '0')}`,
            parent: { id: parent.id },
            enabled: true
        });

        if (dict) {
            children && await addChildren(dict, children, log);
        }
        
        !dict && console.error(`${count}`.padStart(2, ' '), { name, code });
    });
};

module.exports = async log => {
    const dicts = JSON.parse(fs.readFileSync('./modules/dicts.json', 'utf8'));

    const root = await add({
        name: "系统字典",
        code: "DICT_SYSTEM",
        level: "000001",
        enabled: true
    });

    addChildren(root, dicts, log);

    // return await targetService({
    //     url: '/dict',
    //     method: 'GET'
    // }).then(data => data.map(it => ({ [it.code]: it })));
};

