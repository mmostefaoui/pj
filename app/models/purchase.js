const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const puchaseSchema = new Schema({
    user: {type: ObjectId, ref: 'User'},
    album: {type: ObjectId, ref: 'Album'},
});

module.exports = mongoose.model('Purchase', puchaseSchema);