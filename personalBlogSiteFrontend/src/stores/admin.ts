import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export default defineStore('admin', () => {
  const isLoggedIn = ref(false);

  async function getLoginStatus() {
    try {
      await axios.get('/loginStatus');
      isLoggedIn.value = true;
    } catch {
      isLoggedIn.value = false;
    }
  }

  async function login(username: String, password: String) {
    try {
      await axios.post('/login', { username, password });
      isLoggedIn.value = true;
    } catch {
      window.alert('Invalid Username or Password');
    }
  }
  return { isLoggedIn, login, getLoginStatus };
});
