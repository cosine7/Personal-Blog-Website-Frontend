import Mongoose from 'mongoose';

const { model, Schema } = Mongoose;

export default model('Category', new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  toJSON: {
    getters: true,
    virtuals: false,
  },
}));
