import Mongoose from 'mongoose';

const blogModel = Mongoose.model('Blog', new Mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
}, {
  toJSON: {
    getters: true,
    virtuals: false,
  },
  timestamps: true,
}));

export default blogModel;
