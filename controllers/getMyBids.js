const bid = require("../models/bidModel.js");
const bidder = require("../models/bidderModel.js");

const getMyBids = async (req, res) => {
  try {
    let arra = [];
    let winner = [];
    const user = await bidder.findById(req.body.uid);
    const userBiddings = user.bidded;
    // let workout = Object.values(workouts);
    // console.log(userBiddings);
    for (const singleBid of userBiddings) {
      const sbid = await bid.findById(singleBid);
      if(user.name==sbid.final_name){
        winner.push(sbid);
      }
      arra.push(sbid);
    }
    res.status(200).json({arra, winner});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = getMyBids;
