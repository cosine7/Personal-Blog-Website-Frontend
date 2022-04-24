import express from 'express';
import Controller from '../controllers/blog.controller.js';

export default express.Router()
  .post('/', Controller.addOne)
  .get('/:category', Controller.getBlogs);
