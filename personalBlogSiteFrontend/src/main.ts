import { createApp } from 'vue';
import { createPinia } from 'pinia';
import useAdminStore from './stores/admin';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(createPinia());
const admin = useAdminStore();
await admin.getLoginStatus();

app
  .use(router)
  .mount('#app');
