import catRouter from './src/routes/cat-router.js';
import express from 'express';
import userRouter from './src/routes/user-router.js';

const router = express.Router();

// bind base url for all cat routes to catRouter
router.use('/cats', catRouter);
// bind base url for all user routes to userRouter
router.use('/users', userRouter);


export default router;