import Blog from '../models/blog.model.js';
import Category from '../models/category.model.js';

export default class {
  static async addOne(body) {
    return {
      id: (await Category.findOne({ name: body.category }))._id,
      blog: await Blog.create(body),
    };
  }

  static async getAll(_id) {
    if (_id === 'all') {
      return Blog.find();
    }
    const category = await Category.findOne({ _id });
    return Blog.find({ category: category.name });
  }
}
