import Service from '../services/category.service.js';

export default class {
  static async addOne(request, response) {
    try {
      response.status(201).json(await Service.addOne(request.body));
    } catch (error) {
      response.sendStatus(400);
    }
  }

  static async getAll(request, response) {
    try {
      response.json(await Service.getAll());
    } catch (error) {
      response.sendStatus(404);
    }
  }
}
