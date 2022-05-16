import { defineStore } from 'pinia';
import { reactive } from 'vue';
import axios from 'axios';

export default defineStore('category', () => {
  interface Category {
    _id: string,
    name: string,
  }
  const items = reactive(<Category[]>[]);

  async function getCategory() {
    try {
      const { data } = await axios.get('/category');
      items.push(...data);
    } catch {
      window.alert('Unable to Fetch Categories');
    }
  }

  async function addCategory(category: string) {
    try {
      const { data } = await axios.post('/category', { name: category });
      items.push(data);
    } catch {
      window.alert('Unable to Add Categories');
    }
  }

  return {
    items, getCategory, addCategory,
  };
});
