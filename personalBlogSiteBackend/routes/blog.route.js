import express from 'express';
import Controller from '../controllers/blog.controller.js';

const router = express.Router();

router.post('/', Controller.addOne);

export default router;
