import Model from '../models/category.model.js';

export default class {
  static async addOne(body) {
    await Model.create(body);
    return Model.findOne(body).select('-__v');
  }

  static async getAll() {
    return Model.find().select('-__v');
  }
}
