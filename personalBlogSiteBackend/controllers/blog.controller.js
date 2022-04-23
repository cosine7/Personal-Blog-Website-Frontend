import BlogService from '../services/blog.service.js';

export default class {
  static async addOne(request, response) {
    try {
      await BlogService.addOne(request.body);
      response.sendStatus(201);
    } catch (error) {
      response.sendStatus(400);
    }
  }
}
