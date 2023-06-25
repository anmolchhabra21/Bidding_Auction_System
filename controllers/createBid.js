const bid = require("../models/bidModel.js");

const createBid = async (req, res) => {
  try {
    // workout is the new document created by using the function also with the id also included
    const workout = await bid.create({
    //   user_id: "3",
      name: req.body.name,
      category_id: req.body.category,
      date: new Date().getTime() ,
      start_bid_date: new Date().getTime() + req.body.limit*60000 ,
      price: req.body.price,
      final_name: req.body.name,
      final_price: req.body.price,
      sold: false,
    });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {createBid};
