import jwt from 'jsonwebtoken';
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
      response.cookie(
        'accessToken',
        jwt.sign(request.body, process.env.ACCESS_TOKEN_SECRET),
        { httpOnly: true },
      );
      response.sendStatus(200);
    } catch (error) {
      response.status(404).send(error.message);
    }
  }

  static async loginStatus(request, response) {
    console.log('cookies', request.cookies);
    const { accessToken } = request.cookies;
    if (!accessToken) {
      response.sendStatus(401);
      return;
    }
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, err => {
      response.sendStatus(err ? 401 : 200);
    });
  }
}
