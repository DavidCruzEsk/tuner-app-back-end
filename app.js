const express = require('express');
const app = express();
const cors = require('cors');
const songsController = require('./controller/songsController');

app.use(express.json());
app.use(cors());

app.use('/songs', songsController);

app.get('/', (req, res) => {
    res.send('Welcome to the Tuner Back-end App');
});

app.get('*', (req, res) => {
    res.status(404).send('Page Not Found');
});

module.exports = app;