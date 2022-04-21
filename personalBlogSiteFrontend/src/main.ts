import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import useAdminStore from './stores/admin';
import App from './App.vue';
import router from './router';

axios.defaults.baseURL = 'http://localhost:3000/api';
const app = createApp(App);
app.use(createPinia());
await useAdminStore().getLoginStatus();

app
  .use(router)
  .mount('#app');
