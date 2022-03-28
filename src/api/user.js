import request from '@/utils/request';
import qs from 'qs';

export async function signin(Authorization) {
    return request({
        url: '/api/admin/auth/login',
        method: 'POST',
        headers: {
            Authorization
        }
    });
}

export async function signinV1(data) {
    return request({
        url: '/api/admin/auth/login',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(data)
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
