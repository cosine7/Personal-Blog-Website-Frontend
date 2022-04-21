import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export default defineStore('admin', () => {
  const isLoggedIn = ref(false);

  async function getLoginStatus() {
    try {
      await axios.get('api/loginStatus');
      isLoggedIn.value = true;
    } catch {
      isLoggedIn.value = false;
    }
  }

  async function login(username: String, password: String) {
    console.log(username, password);
  }
  return { isLoggedIn, login, getLoginStatus };
});
