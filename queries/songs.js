const db = require('../db/dbConfig');

async function getAllSongs() {
    try {
        const allSongs = await db.any('SELECT * FROM songs');
        return allSongs;
    } catch (error) {
        return error;
    }
}

async function getSong(id) {
    try {
        const song = await db.one('SELECT * FROM songs WHERE id=$1', id);
        return song;
    } catch (error) {
        return error;
    }
}

async function createSong(song) {
    const newSong = await db.one('INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5)RETURNING *', [song.name, song.artist, song.album, song.time, song.is_favorite]);
    return newSong;
}

module.exports = {
    getAllSongs,
    getSong,
    createSong
};