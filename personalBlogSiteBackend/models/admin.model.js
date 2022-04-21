import Mongoose from 'mongoose';

export default Mongoose.model('Admin', new Mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
}, {
  toJSON: {
    getters: true,
    virtuals: false,
  },
}));
