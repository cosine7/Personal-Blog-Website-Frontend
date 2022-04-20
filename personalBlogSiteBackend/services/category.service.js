import Model from '../models/category.model.js';

export default class {
  static async addOne(body) {
    await Model.create(body);
  }

  static async getAll() {
    return Model.find().select('-_id -__v');
  }
}
