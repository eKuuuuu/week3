import express from 'express';
import { validateCat, validateCatIdParam } from '../middlewares/validation.js';
import { putCatModel, deleteCatModel } from '../models/cat-model.js';
import { errorHandler } from '../middlewares/error-handler.js';

const router = express.Router();

router.put('/:id', validateCatIdParam, validateCat, async (req, res, next) => {
    try {
        await putCatModel(req.params.id, req.body, res.locals.user);
        res.status(200).json({ message: 'Cat updated successfully' });
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', validateCatIdParam, async (req, res, next) => {
    try {
        await deleteCatModel(req.params.id, res.locals.user);
        res.status(200).json({ message: 'Cat deleted successfully' });
    } catch (err) {
        next(err);
    }
});

router.use(errorHandler);

export default router;