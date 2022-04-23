import Blog from '../models/blog.model.js';

export default class {
  static async addOne(body) {
    await Blog.create(body);
  }
}
