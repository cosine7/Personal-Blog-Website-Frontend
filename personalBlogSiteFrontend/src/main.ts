import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import mavonEditor from 'mavon-editor';
import useAdminStore from './stores/admin';
import App from './App.vue';
import router from './router';
import 'mavon-editor/dist/css/index.css';

axios.defaults.baseURL = 'http://localhost:3000/api';
const app = createApp(App);
app.use(createPinia());
await useAdminStore().getLoginStatus();

app
  .use(router)
  .use(mavonEditor)
  .mount('#app');
