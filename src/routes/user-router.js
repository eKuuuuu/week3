// src/routes/user-router.js
import {
    getUser,
    getUserById,
    postUser,
    putUser,
    deleteUser,
} from '../controllers/user-controller.js';

import { authorizeUser } from '../middlewares/authorization.js';
import express from 'express';

const userRouter = express.Router();

userRouter
    .route('/')
    .get(getUser)
    .post(postUser);

userRouter.route('/:id')
    .get(getUserById)
    .put(authorizeUser, putUser)
    .delete(deleteUser);

export default userRouter;