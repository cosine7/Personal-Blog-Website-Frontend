import { defineStore } from 'pinia';
import { reactive } from 'vue';
import axios from 'axios';
import type { Router } from 'vue-router';

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
  interface This {
    $router: Router
  }
  const blogs = reactive(<Blogs>{});

  async function addBlog(this: This, content: String, category: string) {
    try {
      const { data } = await axios.post('/blog', { content, category });
      const { id, blog } = data;
      if (!(id in blogs)) {
        blogs[id] = <Blog[]>[];
      }
      blogs[id].push(blog);
      blogs.all.push(blog);
      this.$router.push('/');
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
      blogs[id] = data;
    } catch {
      window.alert('Unable to Fetch Blogs');
    }
  }
  return {
    blogs, addBlog, getBlogs,
  };
});
