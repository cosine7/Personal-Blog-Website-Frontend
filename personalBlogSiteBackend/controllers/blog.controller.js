import BlogService from '../services/blog.service.js';

export default class {
  static async addOne(request, response) {
    try {
      response.status(201).json(await BlogService.addOne(request.body));
    } catch (error) {
      response.sendStatus(400);
    }
  }

  static async getBlogs(request, response) {
    try {
      response.status(200).json(await BlogService.getAll(request.params.category));
    } catch (error) {
      response.sendStatus(400);
    }
  }
}
