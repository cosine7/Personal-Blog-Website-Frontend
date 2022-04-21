import Service from '../services/admin.service.js';

export default class {
  static async signUp(request, response) {
    try {
      await Service.signUp(request.body);
      response.sendStatus(201);
    } catch (error) {
      response.sendStatus(400);
    }
  }

  static async login(request, response) {
    try {
      await Service.authenticate(request.body);
      response.sendStatus(200);
    } catch (error) {
      response.status(404).send(error.message);
    }
  }
}
