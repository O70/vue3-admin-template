const fs = require('fs');
const { targetService } = require('./service');

function add(data) {
    return targetService({
        url: '/dict',
        method: 'POST',
        data
    });
}

module.exports = async () => {
    const dicts = JSON.parse(fs.readFileSync('./modules/dicts.json', 'utf8'));

    const result = new Map();

    const root = await add({
        name: "系统字典",
        code: "DICT_SYSTEM",
        level: "000001",
        enabled: true
    });
    result.set(root.code, root);

    let count = 0;
    const addChildren = (parent, children) => {
        children.forEach(async ({ label: name, code, children }, ind) => {
            count += 1;
            console.log(`${count}`.padStart(2, ' '), { name, code });

            const dict = await add({
                name,
                code,
                level: `${parent.level}${`${ind + 1}`.padStart(6, '0')}`,
                parent: { id: parent.id },
                enabled: true
            });

            if (dict) {
                result.set(dict.code, dict);
                children && addChildren(dict, children);
            }
            
            !dict && console.error(`${count}`.padStart(2, ' '), { name, code });
        });
    };

    addChildren(root, dicts);

    return result;
};

