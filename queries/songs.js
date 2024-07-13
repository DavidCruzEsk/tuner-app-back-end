const db = require('../db/dbConfig');

async function getAllSongs() {
    try {
        const allSongs = await db.any('SELECT * FROM songs');
        return allSongs;
    } catch (error) {
        throw error;
    }
}

async function getSong(id) {
    try {
        const song = await db.one('SELECT * FROM songs WHERE id=$1', id);
        return song;
    } catch (error) {
        throw error;
    }
}

async function createSong(song) {
    const newSong = await db.one('INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *', [song.name, song.artist, song.album, song.time, song.is_favorite]);
    return newSong;
}

async function updateSong(id, song) {
    try {
        const query = 'UPDATE songs SET name = $2, artist = $3, album = $4, time = $5, is_favorite = $6 WHERE id = $1 RETURNING *';
        const values = [id, song.name, song.artist, song.album, song.time, song.is_favorite];
        const songToUpdate = await db.one(query, values);
        return songToUpdate;
    } catch (error) {
        throw error;
    }
}

async function deleteSong(id) {
    try {
        const unwantedSong = await db.one('DELETE FROM songs WHERE id = $1 RETURNING *', id);
        return unwantedSong;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllSongs,
    getSong,
    createSong,
    updateSong,
    deleteSong
};