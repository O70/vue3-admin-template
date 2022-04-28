import user from '@/api/user';
import { Cookie } from '@/utils';

const defaultState = () => ({
    token: Cookie.getToken() ?? null,
    info: null
});

const state = defaultState();

const mutations = {
    RESET_STATE: state => Object.assign(state, defaultState()),
    SET_TOKEN: (state, token) => (state.token = token),
    SET_INFO: (state, data) => (state.info = data)
};

const actions = {
    signin({ commit }, data) {
        return new Promise((resolve, reject) => {
            user.signin(data).then(res => {
                if (res.data) {
                    console.log(res.data);
                    commit('SET_TOKEN', res.data);
                    Cookie.setToken(res.data);
                    resolve();
                } else {
                    reject(res.message);
                }
            }).catch(reject);
        });
    },
    info({ commit }) {
        return new Promise((resolve, reject) => {
            user.info().then(({ data }) => {
                if (data) {
                    commit('SET_INFO', data);
                    resolve(data);
                } else {
                    reject('Verification failed, please Login again.');
                }
            }).catch(reject);
        });
    },
    signout({ commit }) {
        return new Promise((resolve, reject) => {
            user.signout().then(({ data }) => {
                Cookie.removeToken();
                commit('RESET_STATE');
                resolve(data);
            }).catch(reject);
        });
    },
    reset({ commit }) {
        Cookie.removeToken();
        commit('RESET_STATE');
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
