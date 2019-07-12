const express = require('express');
const app = express();

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-5323523",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Phonebook step 1, osa 3</h1>');
});

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);