// src/models/cat-model.js

let catItems = []; // Ensure catItems is defined

export const addCat = (cat) => {
    catItems.push(cat);
    return cat;
};