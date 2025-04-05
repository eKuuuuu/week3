import { body, param } from 'express-validator';

export const validateUser = [
    body('name').isString().trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
];

export const validateCat = [
    body('name').isString().trim().notEmpty().withMessage('Name is required'),
    body('age').isInt({ min: 0 }).withMessage('Age must be a non-negative integer'),
];

export const validateUserIdParam = [
    param('id').isInt().withMessage('User ID must be an integer'),
];

export const validateCatIdParam = [
    param('id').isInt().withMessage('Cat ID must be an integer'),
];