const express = require('express');
const songs = express.Router();
const { getAllSongs, getSong, createSong, updateSong, deleteSong } = require('../queries/songs');
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
    try {
        const song = await getSong(id);
        if (song.id) {
            res.status(200).json(song);
        } else {
            res.status(404).json({ error: 'Song not Found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

songs.post('/', checkSong, async (req, res) => {
    const newSong = await createSong(req.body);
    res.status(200).json(newSong);
});

songs.put('/:id', checkSong, async (req, res) => {
    const { id } = req.params;
    const newVersion = req.body;
    const chosenSong = await getSong(id);
    
    if (chosenSong.id) {
        const songUpdated = await updateSong(id, newVersion);
        res.status(200).json(songUpdated);
    } else {
        res.status(404).json({ error: 'Song cannot be found'});
    }
});

songs.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const songToDelete = await deleteSong(id);

    if (songToDelete.id) {
        res.status(200).json(songToDelete);
    } else {
        res.status(404).json({ error: 'Song not found' });
    }
});

module.exports = songs;