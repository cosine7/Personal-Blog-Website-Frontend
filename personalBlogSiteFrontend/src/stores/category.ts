import { defineStore } from 'pinia';
import { reactive } from 'vue';
import axios from 'axios';

export default defineStore('category', () => {
  const items = reactive([{ name: 'All' }]);

  async function getCategory() {
    try {
      const { data } = await axios.get('/category');
      items.push(...data);
    } catch {
      window.alert('Unable to Fetch Categories');
    }
  }

  async function addCategory(category: string) {
    const item = { name: category };
    try {
      await axios.post('/category', item);
      items.push(item);
    } catch {
      window.alert('Unable to Add Categories');
    }
  }

  return {
    items, getCategory, addCategory,
  };
});
