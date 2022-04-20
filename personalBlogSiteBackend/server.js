import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import categoryRouter from './routes/category.route.js';
import 'dotenv/config';

const app = express();
app.use(bodyParser.json());
app.use(categoryRouter);

try {
  await Mongoose.connect(process.env.MONGODB_CONNECTION_LINK);
  app.listen(8080);
} catch (error) {
  console.log(error);
}
