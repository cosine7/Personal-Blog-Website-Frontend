import express from 'express';
import Controller from '../controllers/admin.controller.js';
import { getLoginStatus } from '../middlewares/authenticateToken.js';

export default express.Router()
  .post('/signUp', Controller.signUp)
  .post('/login', Controller.login)
  .get('/loginStatus', getLoginStatus)
  .post('/logout', Controller.logout);
