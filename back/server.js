const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


let store = {};
try {
    const str = fs.readFileSync('store.json', {encoding: 'utf8'});
    store = JSON.parse(str);
} catch (err) {
    fs.writeFileSync('store.json', '{}');
}

app.get('/ws/quizz', (req, res, next) => {
    res.json(store);
});

app.post('/ws/quizz', (req, res, next) => {
    store = req.body;
    fs.writeFileSync('store.json', JSON.stringify(store));
    res.status(204).end();
});

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
