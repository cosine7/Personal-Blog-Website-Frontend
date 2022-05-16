import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import mavonEditor from 'mavon-editor';
import App from './App.vue';
import router from './router';
import 'mavon-editor/dist/css/index.css';

axios.defaults.baseURL = 'http://localhost:3000/api';
createApp(App)
  .use(createPinia()
    .use(({ store }) => { store.router = markRaw(router); }))
  .use(router)
  .use(mavonEditor)
  .mount('#app');
