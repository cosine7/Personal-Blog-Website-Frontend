import express from 'express';
import Controller from '../controllers/category.controller.js';

export default express.Router()
  .get('/category', Controller.getAll)
  .post('/category', Controller.addOne);
