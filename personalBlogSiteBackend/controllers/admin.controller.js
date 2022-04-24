import { importPKCS8, SignJWT } from 'jose';
import Service from '../services/admin.service.js';

const algorithm = 'ES256';
const ecPrivateKey = await importPKCS8(process.env.PRIVATE_KEY, algorithm);

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
      const token = await new SignJWT(request.body)
        .setProtectedHeader({ alg: algorithm })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(ecPrivateKey);
      response.cookie('accessToken', token);
      response.sendStatus(200);
    } catch (error) {
      response.status(404).send(error.message);
    }
  }

  static async logout(request, response) {
    try {
      await response.clearCookie('accessToken');
      response.sendStatus(200);
    } catch (error) {
      response.sendStatus(500);
    }
  }
}
