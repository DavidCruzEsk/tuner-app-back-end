const express = require('express');
const songs = express.Router();
const { getAllSongs } = require('../queries/songs');

songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs.length) {
        res.status(200).json(allSongs);
    } else {
        res.status(505).json({ error: 'Internal Server Error' });
    }
});

module.exports = songs;