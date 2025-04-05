// src/models/user-model.js
import db from '../db.js';

export const deleteUserModel = async (userId) => {
    const query = 'DELETE FROM users WHERE id = $1';
    await db.query(query, [userId]);
};

export const putUserModel = async (userId, userData) => {
    const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';
    await db.query(query, [userData.name, userData.email, userId]);
};