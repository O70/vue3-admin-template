const citizenship = [
    "中国",
    "俄罗斯",
    "美国",
    "英国",
    "法国"
];

const nation = [
    '汉族',
    '蒙古族',
    '回族',
    '藏族',
    '维吾尔族',
    '苗族',
    '彝族',
    '壮族',
    '布依族',
    '朝鲜族',
    '满族',
    '侗族',
    '瑶族',
    '白族',
    '土家族',
    '哈尼族',
    '哈萨克族',
    '傣族',
    '黎族',
    '傈僳族',
    '佤族',
    '畲族',
    '高山族',
    '拉祜族',
    '水族',
    '东乡族',
    '纳西族',
    '景颇族',
    '柯尔克孜族',
    '土族',
    '达斡尔族',
    '仫佬族',
    '羌族',
    '布朗族',
    '撒拉族',
    '毛难族',
    '仡佬族',
    '锡伯族',
    '阿昌族',
    '普米族',
    '塔吉克族',
    '怒族',
    '乌孜别克族',
    '俄罗斯族',
    '鄂温克族',
    '崩龙族',
    '保安族',
    '裕固族',
    '京族',
    '塔塔尔族',
    '独龙族',
    '鄂伦春族',
    '赫哲族',
    '门巴族',
    '珞巴族',
    '基诺族'
];

const business_type = [
    "勘探",
    "开发",
    "工程",
    "海外",
    "信息",
    "综合",
    "天然气"
];

const pinyin = require('pinyin');

// business_type.map(it => pinyin(it, { style: pinyin.STYLE_FIRST_LETTER }))
// .map(it => it.join(''))
// .forEach(it => console.log(it))

const to = l => pinyin(l, { style: pinyin.STYLE_FIRST_LETTER }).join('');

const CITIZENSHIP = {
    label: '国籍',
    code: 'DICT_CITIZENSHIP',
    children: citizenship.map(label => ({
        label,
        code: `DICT_CITIZENSHIP_${pinyin(label, { style: pinyin.STYLE_NORMAL }).join('')}`.toUpperCase()
    }))
};

console.log(JSON.stringify(CITIZENSHIP, null, 4));

// const NATION = {
//     label: '民族',
//     code: 'DICT_NATION',
//     children: nation.map(label => ({
//         label,
//         code: `DICT_NATION_${pinyin(label, { style: pinyin.STYLE_NORMAL }).join('')}`.toUpperCase()
//     }))
// };

// console.log(JSON.stringify(NATION, null, 4));

// const BUSINESS_TYPE = {
//     label: '业务类型',
//     code: 'DICT_BUSINESS_TYPE',
//     children: business_type.map(label => ({
//         label,
//         code: `DICT_BUSINESS_TYPE_${to(label)}`.toUpperCase()
//     }))
// };

// console.log(JSON.stringify(BUSINESS_TYPE, null, 4));

