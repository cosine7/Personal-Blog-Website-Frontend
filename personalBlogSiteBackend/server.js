import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import categoryRouter from './routes/category.route.js';
import adminRouter from './routes/admin.route.js';

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(categoryRouter);
app.use(adminRouter);

try {
  await Mongoose.connect(process.env.MONGODB_CONNECTION_LINK);
  app.listen(8080);
} catch (error) {
  console.log(error);
}
