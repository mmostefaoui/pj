const router = require('express').Router();
const Album = require('../models/album');

// GET /albums
router.route('/')
    .get(function (req, res) {
        Album.find({}, function (err, albums) {
            if (err) {
                return res.sendStatus(401);
            }
            res.json(albums);
        })
    });

// GET /albums/:id
router.route('/:id')
    .get(function (req, res) {
        Album.findById({_id: req.params.id}, function (err, album) {
            if (err) {
                return res.sendStatus(401);
            }
            res.json(album);
        })
    });

// POST /albums
router.route('')
    .post(function (req, res) {
        const album = new Album({
            title: req.body.title,
            performer: req.body.performer,
            cost: req.body.cost
        });

        if (!album.title || !(album.performer) || !(album.cost)) {
            res.status(400);
            res.json({
                "error": "invalid data"
            });
        }
        else {
            album.save(album, function (err) {
                if (err) {
                    return res.sendStatus(401)
                }
                res.json(album);
            });
        }
    });

// PUT /albums/:id
router.route('/:id')
    .put(function (req, res) {
        const update = {};

        update.title = req.body.title;
        update.performer = req.body.performer;
        update.cost = req.body.cost;

        Album.findOneAndUpdate({'_id': req.params.id},
            update, {upsert: true},
            function (err, album) {
                if (err) res.status('500').send(err);
                res.status(200).send(album)
            });
    });

// DELETE /albums/:id
router.route('/:id')
    .delete(function (req, res) {
        Album.remove({'_id': req.params.id}, function (err) {
            if (err) res.status('500').send(err);

            res.status(204).send('Album removed.');
        })
    });


module.exports = router;