const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    password: String,
    email: String,
    date: {type: Number, default: new Date().getTime()},
    bidded: {type: Array, default: []}
});

let Item = mongoose.model('bidder', ItemSchema);

module.exports = Item;