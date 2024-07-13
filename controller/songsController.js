const express = require('express');
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require('../queries/songs');
const { checkSong } = require('../validations/checkSongs');

songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs.length) {
        res.status(200).json(allSongs);
    } else {
        res.status(505).json({ error: 'Internal Server Error' });
    }
});

songs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (song.id) {
        res.status(200).json(song);
    } else {
        res.status(404).json({ error: 'Song Cannot Be Found' });
    }
});

songs.post('/', checkSong, async (req, res) => {
    const newSong = await createSong(req.body);
    res.status(200).json(newSong);
});

module.exports = songs;