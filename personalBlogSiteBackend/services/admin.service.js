import bcrypt from 'bcrypt';
import Model from '../models/admin.model.js';

export default class {
  static async signUp({ username, password }) {
    await Model.create({
      username,
      password: await bcrypt.hash(password, 10),
    });
  }

  static async authenticate({ username, password }) {
    const admin = (await Model.find({ username }))[0];
    if (!admin || !await bcrypt.compare(password, admin.password)) {
      throw new Error('Invalid Username or Password');
    }
  }
}
