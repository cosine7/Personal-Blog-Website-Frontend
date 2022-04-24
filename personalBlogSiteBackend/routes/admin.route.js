import express from 'express';
import Controller from '../controllers/admin.controller.js';
import { getLoginStatus } from '../middlewares/authenticateToken.js';

const router = express.Router();

router.post('/signUp', Controller.signUp);
router.post('/login', Controller.login);
router.get('/loginStatus', getLoginStatus);
router.post('/logout', Controller.logout);
export default router;
