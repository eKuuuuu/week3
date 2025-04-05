import { deleteCatModel, getCatById, putCatModel } from '../models/cat-model.js';

export const deleteCat = async (req, res) => {
    const user = res.locals.user;
    const catId = req.params.id;

    try {
        await deleteCatModel(catId, user);
        res.status(200).json({ message: 'Cat deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting cat', error: err.message });
    }
};

export const putCat = async (req, res) => {
    const user = res.locals.user;
    const catId = req.params.id;
    const catData = req.body;

    try {
        await putCatModel(catId, catData, user);
        res.status(200).json({ message: 'Cat updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error updating cat', error: err.message });
    }
};