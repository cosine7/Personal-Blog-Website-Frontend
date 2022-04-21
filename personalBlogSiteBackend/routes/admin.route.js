import express from 'express';
import Controller from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/signUp', Controller.signUp);
router.post('/login', Controller.login);
export default router;
