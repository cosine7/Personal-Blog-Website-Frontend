import Mongoose from 'mongoose';

export default Mongoose.model('Category', new Mongoose.Schema({
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
