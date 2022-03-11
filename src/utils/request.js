import axios from 'axios';
import { ElMessage } from 'element-plus';
import store from '@/store';
import { Cookie } from '@/utils';

const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY;

const errorMessage = (message, error = message) => {
    console.error('[ERROR]', error);
    ElMessage({ message, type: 'error', grouping: true });
};

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
        errorMessage(error.message, error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        const { data = {}} = response;

        if (data.code !== 200) {
            errorMessage(`${data.code}: ${data.message}`);
        } else {
            const { messages = {}} = response.config;
            messages.success && ElMessage({
                message: messages.success,
                type: 'success',
                grouping: true
            });
        }

        return data;
    },
    error => {
        errorMessage(error.message, error);
        return Promise.reject(error);
    }
);

export default instance;
