import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    server: {
        port: '8717',
        proxy: {
            '/api/admin': {
                // target: 'http://localhost:8037',
                // target: 'http://localhost:9717',
                target: 'http://10.122.163.108:9717',
                changeOrigin: true,
                rewrite: p => {
                    console.log(p.replace(/\/api\/admin/g, ''));
                    return p.replace(/\/api\/admin/g, '');
                }
            },
            '/api': {
                target: 'http://localhost:8037',
                changeOrigin: true
            }
        }
    }
});
