import request from '@/utils/request';

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
        data
    });
}

export function sendCode(data) {
    return request({
        url: '/api/admin/verification/code/send',
        method: 'POST',
        data
    });
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
