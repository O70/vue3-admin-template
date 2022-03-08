import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import '@/router/guard';
import store from '@/store';
import directive from '@/components/directive';

import 'element-plus/dist/index.css';
import '@/styles/index.scss';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(directive);

app.mount('#app');
