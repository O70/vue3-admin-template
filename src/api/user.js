import request from '@/utils/request';

export async function signin(data) {
    const data1 = new FormData();
    data1.append('username', data.username);
    data1.append('password', data.password);
    data1.append('password1', data.password);
    return request({
        url: '/api/admin/login',
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // },
        data: data1
    });

    // const { username, password } = data;

    // return username === 'master' && password === '111111' ? {
    //     code: 20000,
    //     data: `${username.toUpperCase()}-TOKEN`
    // } : {
    //     code: 40001,
    //     message: 'Account and password are incorrect.'
    // };
}

export async function info() {
    /* return request({
        url: '/api/admin/user',
        method: 'GET'
    }); */

    return {
        code: 20000,
        data: {
            id: 'MASTER-ID',
            name: 'Master',
            username: 'master',
            roles: ['admin']
        }
    };
}

export async function signout() {
    /* return request({
        url: '/api/admin/user/logout',
        method: 'POST'
    }); */

    return {
        code: 20000,
        data: true
    };
}

export default { signin, info, signout };
