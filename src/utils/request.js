import axios from 'axios';
import store from '@/store';
import { Cookie } from '@/utils';

const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY;

const instance = axios.create({
    // baseURL: import.meta.env.VITE_API,
    timeout: 6000
});

instance.interceptors.request.use(
    config => {
        store.getters.token && (config.headers[TOKEN_KEY] = Cookie.getToken());

        return config;
    },
    error => {
        console.error('[TODO]', 'Request:', error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => response.data,
    error => {
        console.error('[TODO]', 'Response:', error);
        return Promise.reject(error);
    }
);

export default instance;
