function checkSong (req, res, next) {
    if (!req.body.name) {
        res.status(400).json({ error: 'Name Must Be Included'});
    }

    if (!req.body.name) {
        res.status(400).json({ error: 'Name Must Be Included'});
    }

    if (!req.body.artist) {
        res.status(400).json({ error: 'Artist Must Be Included'});
    }

    if (!req.body.album) {
        res.status(400).json({ error: 'Album Must Be Included'});
    }

    if (!req.body.time) {
        res.status(400).json({ error: 'Time Must Be Included'});
    }

    if (!req.body.is_favorite) {
        res.status(400).json({ error: 'is_favorite Must Be Included'});
    }

    next();
}

module.exports = {
    checkSong
}