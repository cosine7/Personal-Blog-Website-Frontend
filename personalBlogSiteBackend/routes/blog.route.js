import express from 'express';
import Controller from '../controllers/blog.controller.js';

const router = express.Router();

router.post('/', Controller.addOne);
router.get('/:category', Controller.getBlogs);

export default router;
