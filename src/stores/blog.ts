import { defineStore } from 'pinia';
import axios from 'axios';

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

export default defineStore('blog', {
  state: () => ({ blogs: <Blogs>{} }),

  actions: {
    async addBlog(content: String, category: string) {
      try {
        const { data } = await axios.post('/blog', { content, category });
        const { id, blog } = data;
        if (!(id in this.blogs)) {
          this.blogs[id] = <Blog[]>[];
        }
        this.blogs[id].push(blog);
        this.blogs.all.push(blog);
        this.router.push('/');
      } catch {
        window.alert('Unable to Add Blog');
      }
    },

    async getBlogs(id: string) {
      try {
        const { data } = await axios.get(`/blog/${id}`);
        if (!(id in this.blogs)) {
          this.blogs[id] = <Blog[]>[];
        }
        this.blogs[id] = data;
      } catch {
        window.alert('Unable to Fetch Blogs');
      }
    },
  },
});
