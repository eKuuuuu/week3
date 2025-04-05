import db from '../db.js';

export const deleteCatModel = async (catId, user) => {
    const query = user.role === 'admin'
        ? 'DELETE FROM cats WHERE id = $1'
        : 'DELETE FROM cats WHERE id = $1 AND owner_id = $2';
    const params = user.role === 'admin' ? [catId] : [catId, user.id];

    await db.query(query, params);
};

export const putCatModel = async (catId, catData, user) => {
    const query = user.role === 'admin'
        ? 'UPDATE cats SET name = $1, age = $2 WHERE id = $3'
        : 'UPDATE cats SET name = $1, age = $2 WHERE id = $3 AND owner_id = $4';
    const params = user.role === 'admin'
        ? [catData.name, catData.age, catId]
        : [catData.name, catData.age, catId, user.id];

    await db.query(query, params);
};