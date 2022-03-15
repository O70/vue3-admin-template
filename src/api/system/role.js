import request from '@/utils/request';
import qs from 'qs';

export function page(params) {
    return request({
        url: '/api/admin/role/page',
        method: 'GET',
        params,
        paramsSerializer: p => qs.stringify(p, { allowDots: true })
    });
}
