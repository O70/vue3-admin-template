import {
    createRouter,
    createWebHistory
} from 'vue-router';

import Layout from '@/layout/index.vue';
import Routes from './routes';

const routes = [
    {
        path: '/signin',
        component: () => import('@/views/base/signin.vue'),
        meta: { hidden: true }
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/base/dashboard.vue'),
                meta: { title: 'Dashboard' }
            }
        ]
    },
    {
        path: '/error',
        component: Layout,
        meta: { hidden: true },
        children: [
            {
                path: '',
                component: () => import('@/views/base/error.vue'),
                meta: { title: 'Error' }
            }
        ]
    },
    ...Routes,
    {
        path: '/about',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/base/about.vue'),
                meta: { title: 'About' }
            }
        ]
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: _ => ({ y: 0 })
});
