import express from 'express';
import multer from 'multer';
import { postCat } from '../controllers/cat-controller.js';

const router = express.Router();

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Routes
router.post('/cat', upload.single('file'), postCat);

export default router;