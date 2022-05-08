const { targetService } = require('./service');
const api = require('./api');
const { get } = require('@vueuse/shared');

let dicts;
const getDict = code => ({ id: dicts[code].id });

function additional({ id: cid }, ind) {
    new Array(2).fill('carPlates').map((it, i) => ({
        cid,
        number: `京A XXXX${i}-${ind}`
    })).forEach(data => targetService({ url: '/car/plate', method: 'post', data }));

    const worker = {
        cid,
        org: null,
        dept: null,
        currentDept: null,
        office: null,
        type: getDict('DICT_PERSONNEL_TYPE'),
        employeeType: getDict('DICT_EMPLOYEE_TYPE_HTH'),
        pair: false,
        comeTime: "2022-04-20",
        joinJobTime: "2022-04-20",
        rank: getDict('DICT_RANK_YJZ'),
        telephone: "办公电话7",
        address: "办公地址(省-Province｜市区-City｜县-County)",
        location: "办公位置(地区｜楼宇名称｜层｜房间)",
        area: 7.0,
        email: "xxx@gmail.com",
        workPermitNo: "工作证号7",
        erpNo: "00000008",
        salaryCardNo: "工资卡号",
        providentFundNo: "公积金账号",
        jobStatus: getDict('DICT_JOB_STATUS_ZG'),
        leaveReason: null,
        leaveTime: "2022-04-20",
        iam: `T000000${ind}`,
        collaborator: "合作单位7",
        sort: ind,
        pending: false,
        remark: "备注"
      };
    targetService({ url: '/worker', method: 'post', data: worker });

    const family = {
        cid,
        name: "无极",
        birth: "1899-10-05",
        political: getDict('DICT_POLITICAL_FACE_DY'),
        address: "工作地址",
        post: "植物",
        phone: "10086",
        relation: getDict('DICT_RELATION_BROTHER'),
        emergencyContact: false
    };
    new Array(2).fill(family).map((it, i) => Object.assign({}, it, {
        name: `${it.name}-${i}`
    })).forEach(data => targetService({ url: '/family', method: 'post', data }));

    const contract = {
        cid,
        code: 'HT0008',
        signTime: '2020-10-10',
        name: '合同名称',
        employCompany: '聘任单位',
        post: null,
        typeOfContract: getDict('DICT_TYPEOF_CONTRACT_LONG'),
        startDate: '2019-10-10',
        endDate: '2022-10-10'
    };
    new Array(2).fill(contract).map((it, i) => Object.assign({}, it, {
        code: `${it.code}-${i}`,
        name: `${it.name}-${i}`
    })).forEach(data => targetService({ url: '/contract', method: 'post', data }));
}

module.exports = async () => {
    api.dicts().then(allDicts => {
        dicts = allDicts;

        const template = {
            "avatar": null,
            "name" : "鬼王",
            "sex" : getDict('DICT_SEX_MAN'),
            "credentialsType" : getDict('DICT_CREDENTIALS_TYPE_SFZ'),
            "credentialsNo" : "263340189910235112",
            "citizenship" : "中国",
            "nation" : "汉",
            "registryType" : getDict('DICT_REGISTRY_TYPE_NY'),
            "registryPlace" : "户口所在地",
            "birth" : "1899-10-20",
            "birthPlace" : "出生地",
            "nativePlace" : "湖南",
            "marriage" : getDict('DICT_MARRIAGE_WH'),
            "mobile" : "13677889091",
            "homePhone" : "010-9876541",
            "address" : "现居住地",
            "zipCode" : "100901",
            "diploma" : getDict('DICT_DIPLOMA_XX'),
            "degree" : getDict('DICT_DEGREE_XS'),
            "socialFunction" : "社会职能",
            "introduction" : "自我介绍",
            "sort" : 0,
            "remark" : "备注"
        };
        
        const datas = new Array(5).fill(template).map((it, i) => Object.assign({}, it, {
            name: it.name + i,
            mobile: `1367788909${i}`,
            sort: i
        }));

        datas.forEach((data, ind) => {
            targetService({
                url: '/citizen',
                method: 'POST',
                data
            }).then(citizen =>  additional(citizen, ind))
        });
    })
};