import { defineStore } from 'pinia';
import { reactive } from 'vue';
import axios from 'axios';

export default defineStore('blog', () => {
  interface Blog {
    _id: string,
    category: string,
    content: string,
    createdAt: string,
    updatedAt: String,
    __v: Number
  }
  interface Blogs {
    [key: string]: Blog[]
  }
  const blogs = reactive(<Blogs>{});

  async function addBlog(content: String, category: string) {
    try {
      const { data } = await axios.post('/blog', { content, category });
      if (!(category in blogs)) {
        blogs[category] = <Blog[]>[];
      }
      blogs[category].push(data);
    } catch {
      window.alert('Unable to Add Blog');
    }
  }

  async function getBlogs(id: string) {
    try {
      const { data } = await axios.get(`/blog/${id}`);
      if (!(id in blogs)) {
        blogs[id] = <Blog[]>[];
      }
      blogs[id].push(...data.blogs);
    } catch {
      window.alert('Unable to Add Blog');
    }
  }
  return {
    blogs, addBlog, getBlogs,
  };
});
