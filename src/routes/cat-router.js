import {
    deleteCat,
    getCat,
    getCatById,
    postCat,
    putCat,
} from '../controllers/cat-controller.js';

import { createThumbnail } from '../middlewares/middlewares.js';
import { authorizeCatOwner } from '../middlewares/authorization.js';
import express from 'express';
import multer from 'multer';

const catRouter = express.Router();

const upload = multer({ dest: 'uploads/' });

catRouter
    .route('/')
    .get(getCat)
    .post(upload.single('file'), createThumbnail, postCat);

catRouter.route('/:id')
    .get(getCatById)
    .put(authorizeCatOwner, putCat)
    .delete(authorizeCatOwner, deleteCat);

catRouter.route('/owner/:id').get((req, res) => {
    res.send('Get owner by ID');
});

export default catRouter;