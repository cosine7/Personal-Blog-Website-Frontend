import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import categoryRouter from './routes/category.route.js';
import adminRouter from './routes/admin.route.js';
import blogRouter from './routes/blog.route.js';
import authenticateToken from './middlewares/authenticateToken.js';

await Mongoose.connect(process.env.MONGODB_CONNECTION_LINK);
express()
  .use(cookieParser())
  .use(bodyParser.json())
  .use(categoryRouter)
  .use(adminRouter)
  .use('/blog', authenticateToken)
  .use('/blog', blogRouter)
  .listen(8080);
