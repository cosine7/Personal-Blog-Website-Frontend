import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import { Router } from 'vue-router';

export default defineStore('admin', () => {
  interface This {
    $router: Router
  }
  const isLoggedIn = ref(false);

  async function getLoginStatus() {
    try {
      await axios.get('/loginStatus');
      isLoggedIn.value = true;
    } catch {
      isLoggedIn.value = false;
    }
  }

  async function login(this: This, username: String, password: String) {
    try {
      await axios.post('/login', { username, password });
      await this.$router.push('/');
      isLoggedIn.value = true;
    } catch {
      window.alert('Invalid Username or Password');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async function logout(this: This) {
    try {
      await axios.post('/logout');
      await this.$router.push('/');
      isLoggedIn.value = false;
    } catch {
      window.alert('Internal Server Error');
    }
  }
  return {
    isLoggedIn, login, getLoginStatus, logout,
  };
});
