import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('admin', {
  state: () => ({ isLoggedIn: false }),

  actions: {
    async login(username: string, password: string) {
      try {
        await axios.post('/login', { username, password });
        await this.router.push('/');
        this.isLoggedIn = true;
      } catch {
        window.alert('Invalid Username or Password');
      }
    },

    async getLoginStatus() {
      try {
        await axios.get('/loginStatus');
        this.isLoggedIn = true;
      } catch {
        this.isLoggedIn = false;
      }
    },

    async logout() {
      try {
        await axios.post('/logout');
        await this.router.push('/');
        this.isLoggedIn = false;
      } catch {
        window.alert('Internal Server Error');
      }
    },
  },
});
