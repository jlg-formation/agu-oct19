const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());

const store = {};

app.get('/ws/quizz', (req, res, next) => {
    res.json(store);
});

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
