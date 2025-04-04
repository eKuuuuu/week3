import express from 'express';
const app = express();
app.use(express.json());

const catItems = [
    {
        cat_id: 9592,
        cat_name: 'Frank',
        weight: 11,
        owner: 3609,
        filename: 'f3dbafakjsdfhg4',
        birthdate: '2021-10-12',
    },
    {
        cat_id: 9590,
        cat_name: 'Mittens',
        weight: 8,
        owner: 3602,
        filename: 'f3dasdfkjsdfhgasdf',
        birthdate: '2021-10-12',
    },
];

const userItems = [
    {
        user_id: 3609,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@metropolia.fi',
        role: 'user',
        password: 'password',
    },
    {
        user_id: 3610,
        name: 'Jane Smith',
        username: 'janesmith',
        email: 'jane@metropolia.fi',
        role: 'admin',
        password: 'password123',
    },
    {
        user_id: 3611,
        name: 'Alice Johnson',
        username: 'alicej',
        email: 'alice@metropolia.fi',
        role: 'user',
        password: 'alicepass',
    },
    {
        user_id: 3612,
        name: 'Bob Brown',
        username: 'bobbrown',
        email: 'bob@metropolia.fi',
        role: 'user',
        password: 'bobpassword',
    },
];

// Helper functions
const listAllCats = () => catItems;
const findCatById = (id) => catItems.find((item) => item.cat_id == id);
const addCat = (cat) => {
    const { cat_name, weight, owner, filename, birthdate } = cat;
    const newId = catItems[0].cat_id + 1;
    catItems.unshift({ cat_id: newId, cat_name, weight, owner, filename, birthdate });
    return { cat_id: newId };
};

const listALlUsers = () => userItems;
const findUserById = (id) => userItems.find((item) => item.user_id == id);
const addUser = (user) => {
    const { name, username, email, role, password } = user;
    const newId = userItems[0].user_id + 1;
    userItems.unshift({ user_id: newId, name, username, email, role, password });
    return { user_id: newId };
}

// Routes
app.get('/api/v1/cat', (req, res) => {
    res.json(listAllCats());
});

app.get('/api/v1/cat/:id', (req, res) => {
    const cat = findCatById(req.params.id);
    if (cat) {
        res.json(cat);
    } else {
        res.status(404).json({ message: 'Cat not found' });
    }
});

app.post('/api/v1/cat', (req, res) => {
    const newCat = addCat(req.body);
    res.status(201).json(newCat);
});

app.put('/api/v1/cat/:id', (req, res) => {
    res.json({ message: 'Cat item updated.' });
});

app.delete('/api/v1/cat/:id', (req, res) => {
    res.json({ message: 'Cat item deleted.' });
});

app.get('/api/v1/user', (req, res) => {
    res.json(listALlUsers());
});

app.get('api/v1/user/:id', (req, res) => {
    const user = findUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.post('/api/v1/user', (req, res) => {
    const newUser = addUser(req.body);
    res.status(201).json(newUser);
});

app.put('/api/v1/user/:id', (req, res) => {
    res.json({ message: 'User item updated.' });
});

app.delete('/api/v1/user/:id', (req, res) => {
    res.json({ message: 'User item deleted.' });
});


export { app };