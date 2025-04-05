import catRouter from '../routes/cat-router.js';
import express from 'express';
import userRouter from '../routes/user-router.js';
import { authenticate } from '../middlewares/authentication.js';

const router = express.Router();

router.use(authenticate); // Apply authentication to all routes

// bind base url for all cat routes to catRouter
router.use('/cats', catRouter);
// bind base url for all user routes to userRouter
router.use('/users', userRouter);

export default router;