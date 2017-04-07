const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// configuration
const configDb = require("./config/database");
mongoose.connect(configDb.database);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.set('superSecret', configDb.secret);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// Routes
const albumRoutes = require("./app/routes/albumRoutes");
const purchaseRoutes = require("./app/routes/purchaseRoutes");

app.use('/albums/', albumRoutes);
app.use('/purchases/', purchaseRoutes);

app.listen(port, function (err) {
    if (err) throw err;
    console.log("Server is started at http://localhost:" + port);
});

module.exports = app;
