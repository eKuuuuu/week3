import { getCatById } from '../controllers/cat-controller.js';

export const authorizeCatOwner = async (req, res, next) => {
    const catId = req.params.id;
    const user = res.locals.user;

    if (user.role === 'admin') {
        return next();
    }

    try {
        const cat = await getCatById(catId);
        if (cat.ownerId !== user.id) {
            return res.status(403).json({ message: 'Forbidden: You are not the owner of this cat' });
        }
        next();
    } catch (err) {
        next(err);
    }
};

export const authorizeUser = (req, res, next) => {
    const userId = req.params.id;
    const user = res.locals.user;

    if (user.role === 'admin' || user.id === parseInt(userId, 10)) {
        return next();
    }

    return res.status(403).json({ message: 'Forbidden: You can only update your own user info' });
};