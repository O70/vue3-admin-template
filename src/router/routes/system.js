import Layout from '@/layout/index.vue';

export default [
    {
        path: '/system',
        component: Layout,
        redirect: '/system/menu',
        meta: { title: '系统管理' },
        children: [
            {
                path: 'user',
                name: 'UserRouter',
                component: () => import('@/views/system/user.vue'),
                meta: { title: '用户管理' }
            },
            {
                path: 'org',
                name: 'OrgRouter',
                component: () => import('@/views/system/org.vue'),
                meta: { title: '机构管理' }
            },
            {
                path: 'dict',
                name: 'DictRouter',
                component: () => import('@/views/system/dict/index.vue'),
                meta: { title: '字典管理' }
            },
            {
                path: 'menu',
                name: 'MenuRouter',
                component: () => import('@/views/system/menu.vue'),
                meta: { title: '菜单管理' }
            },
            {
                path: 'role',
                name: 'RoleRouter',
                component: () => import('@/views/system/role/index.vue'),
                meta: { title: '角色管理' }
            },
            {
                path: 'grant',
                name: 'GrantRouter',
                component: () => import('@/views/system/grant.vue'),
                meta: { title: '授权管理' }
            }
        ]
    }
];
