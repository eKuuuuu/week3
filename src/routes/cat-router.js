import express from 'express';
import multer from 'multer';
import { createThumbnail } from '../middlewares.js';
import { postCat } from '../controllers/cat-controller.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/cat', upload.single('file'), createThumbnail, postCat);

export default router;