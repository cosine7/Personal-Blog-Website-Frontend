import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import mavonEditor from 'mavon-editor';
import useAdminStore from './stores/admin';
import useCategoryStore from './stores/category';
import App from './App.vue';
import router from './router';
import 'mavon-editor/dist/css/index.css';

axios.defaults.baseURL = 'http://localhost:3000/api';
const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);
await useAdminStore().getLoginStatus();
await useCategoryStore().getCategory();

app
  .use(router)
  .use(mavonEditor)
  .mount('#app');
