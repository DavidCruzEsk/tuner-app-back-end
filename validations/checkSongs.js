function checkSong (req, res, next) {
    if (!req.body.name) {
        res.status(400).json({ error: 'Name Must Be Included'});
    } else if (typeof req.body.name !== 'string') {
        res.status(400).json({ error: 'Name value must be a string'});
    }

    if (!req.body.artist) {
        res.status(400).json({ error: 'Artist Must Be Included'});
    } else if (typeof req.body.name !== 'string') {
        res.status(400).json({ error: 'Name value must be a string'});
    }

    if (req.body.alum && typeof req.body.album !== 'string') {
        res.status(400).json({ error: 'Album value must be a string'});
    }

    if (req.body.time && typeof req.body.time !== 'string') {
        res.status(400).json({ error: 'Time value must be a string'});
    }

    if (req.body.is_favorite && typeof req.body.is_favorite !== 'boolean') {
        res.status(400).json({ error: 'is_favorite value must be a boolean'});
    }

    next();
}

module.exports = {
    checkSong
}