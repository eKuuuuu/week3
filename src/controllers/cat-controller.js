import { addCat } from '../models/cat-model.js';

const postCat = (req, res) => {
    console.log('Form data:', req.body);
    console.log('File data:', req.file);

    if (!req.file) {
        return res.status(400).json({ message: 'File upload failed' });
    }

    const newCat = addCat({ ...req.body, filename: req.file.filename });
    res.status(201).json(newCat);
};

export { postCat };