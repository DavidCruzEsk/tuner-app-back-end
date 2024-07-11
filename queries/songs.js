const db = require('../db/dbConfig');

async function getAllSongs() {
    try {
        const allSongs = await db.any('SELECT * FROM songs');
        return allSongs;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllSongs
}