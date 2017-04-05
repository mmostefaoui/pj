const router = require('express').Router();
const Purchase = require('../models/purchase');

// POST /purchases
router.route('')
    .post(function (req, res) {
    const purchase = new Purchase({
        user: req.body.user,
        album: req.body.album
    });

    if (!purchase.user || !purchase.album) {
        res.status(400);
        res.json({
            "error": "invalid data"
        });
    }
    else {
        purchase.save(purchase, function (err) {
            if (err) {
                return res.sendStatus(401)
            }
            res.json(purchase);
        });
    }
});

module.exports = router;

