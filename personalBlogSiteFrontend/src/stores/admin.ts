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

  async function logout() {
    try {
      await axios.post('/logout');
      isLoggedIn.value = false;
    } catch {
      window.alert('Internal Server Error');
    }
  }
  return {
    isLoggedIn, login, getLoginStatus, logout,
  };
});
