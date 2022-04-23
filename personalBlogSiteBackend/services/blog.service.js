import Blog from '../models/blog.model.js';
import Category from '../models/category.model.js';

export default class {
  static async addOne(body) {
    await Blog.create(body);
  }

  static async getAll(_id) {
    if (_id === 'all') {
      return {
        name: _id,
        blogs: await Blog.find(),
      };
    }
    const category = await Category.findOne({ _id });
    return {
      name: category.name,
      blogs: await Blog.find({ category: category.name }),
    };
  }
}
