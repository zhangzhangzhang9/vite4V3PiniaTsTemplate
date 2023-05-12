import { createApp } from 'vue';
import router from './router/index';
import store from './store';
import './style.css';
import App from './App.vue';
const app = createApp(App);
app.use(router); //注册路由
app.use(store); //注册状态管理器
app.mount('#app');
