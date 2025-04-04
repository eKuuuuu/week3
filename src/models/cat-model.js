const addCat = (cat) => {
    const { cat_name, weight, owner, filename, birthdate } = cat;
    const newId = catItems[0].cat_id + 1;
    catItems.unshift({ cat_id: newId, cat_name, weight, owner, filename, birthdate });
    return { cat_id: newId };
};

export { addCat };