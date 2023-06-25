const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    sold: {type: Boolean, default: false},
    category_id: String,
    date: {type: Number, default: new Date().getTime()},
    start_bid_date: {type: Number, default: new Date().getTime()+ 600000},
    images: String,
    detail: String,
    final_name: String,
    final_price: Number,
    name: String,
    price: Number,
    bidded: []
});

let Item = mongoose.model('bid', ItemSchema);

module.exports = Item;