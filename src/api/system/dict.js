import request from '@/utils/request';

export function list(params) {
    return request({
        url: '/api/admin/dict',
        method: 'GET',
        params
    });
}

export function tree(params) {
    return request({
        url: '/api/admin/dict/tree',
        method: 'GET',
        params
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
