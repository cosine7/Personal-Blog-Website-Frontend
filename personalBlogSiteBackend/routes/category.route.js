import express from 'express';
import Controller from '../controllers/category.controller.js';

const router = express.Router();

router.get('/category', Controller.getAll);
router.post('/category', Controller.addOne);

export default router;
