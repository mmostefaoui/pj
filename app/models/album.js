const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    title: {type: String, default: ''},
    performer: {type: String, default: ''},
    cost: {type: Number, default: 0}
});
module.exports = mongoose.model('Album', albumSchema);
