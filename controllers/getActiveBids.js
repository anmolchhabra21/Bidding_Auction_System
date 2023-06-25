const bid = require("../models/bidModel.js");

const getBids = async (req, res) => {
  try {
    let arr = [];
    const workouts = await bid.find({});
    // let workout = Object.values(workouts);
    console.log(workouts);
    workouts.forEach((singleBid)=>{
        if(singleBid.sold==false && singleBid.start_bid_date<=new Date().getTime()){
            singleBid.sold = true;
            // singleBid.bidded = true;
        }
        else{
            arr.push(singleBid);
        }
    })
    res.status(200).json(arr);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = getBids;
