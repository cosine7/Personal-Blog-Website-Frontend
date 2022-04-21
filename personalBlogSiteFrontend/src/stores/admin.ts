import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export default defineStore('admin', () => {
  const isLoggedIn = ref(false);

  async function login() {

  }

  async function checkLoginStatus() {
    try {
      await axios.get('api/loginStatus');
      isLoggedIn.value = true;
    } catch {
      isLoggedIn.value = false;
    }
  }
  checkLoginStatus();
  return { isLoggedIn, login, checkLoginStatus };
});
