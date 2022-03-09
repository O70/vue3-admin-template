import request from '@/utils/request';

export function list() {
    return request({
        url: '/api/admin/dict',
        method: 'GET'
    });
}

export function tree() {
    return request({
        url: '/api/admin/dict/tree',
        method: 'GET'
    });
}

export function one(id) {
    return request({
        url: `/api/admin/dict/${id}`,
        method: 'GET'
    });
}

export function save(data) {
    return request({
        url: '/api/admin/dict',
        method: 'POST',
        data
    });
}

export function remove(id) {
    return request({
        url: `/api/admin/dict/${id}`,
        method: 'DELETE'
    });
}
