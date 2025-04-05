import express from 'express';
import { validateUser, validateUserIdParam } from '../middlewares/validation.js';
import { putUserModel, deleteUserModel } from '../models/user-model.js';
import { errorHandler } from '../middlewares/error-handler.js';

const router = express.Router();

router.put('/:id', validateUserIdParam, validateUser, async (req, res, next) => {
    try {
        await putUserModel(req.params.id, req.body);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', validateUserIdParam, async (req, res, next) => {
    try {
        await deleteUserModel(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        next(err);
    }
});

router.use(errorHandler);

export default router;