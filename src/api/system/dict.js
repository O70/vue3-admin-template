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

export function one(identifier) {
    return request({
        url: `/api/admin/dict/${identifier}`,
        method: 'GET'
    });
}

export function children(identifier) {
    return request({
        url: `/api/admin/dict/${identifier}/children`,
        method: 'GET'
    });
}

export function save(data) {
    return request({
        url: '/api/admin/dict',
        method: 'POST',
        data,
        messages: {
            success: '保存成功'
        }
    });
}

export function remove(id) {
    return request({
        url: `/api/admin/dict/${id}`,
        method: 'DELETE'
    });
}
