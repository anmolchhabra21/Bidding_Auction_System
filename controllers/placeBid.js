const bid = require("../models/bidModel.js");
const bidder = require("../models/bidderModel.js");

const placeBid = async (req, res) => {
  try {
    let arr = [];
    const indBid = await bid.findById(req.body.id);
    const user = await bidder.findById(req.body.user_id);
    if(indBid.sold===true){
        res.status(400).json({message: "The Item has already been sold!"});
        // indBid.bidded = true;
    }
    else if(indBid.date+5*60000 <=new Date().getTime()){
        indBid.sold = true;
        res.status(400).json({message: "It has been more than 5 minutes of absence, you can't bid now",date: indBid.date+5*60000, now: new Date().getTime() });
    }
    else if(indBid.start_bid_date<=new Date().getTime()){
        indBid.sold = true;
        res.status(400).json({message: "Sorry but the time limit has been finished, you can't bid now"});
    }
    else{

        if(req.body.price<=indBid.final_price){
            res.status(400).json({message: "You have to bid higher"});
        }
        else{
            indBid.final_name=user.name;
            indBid.final_price=req.body.price;
            let temp = indBid.start_bid_date-indBid.date
            indBid.start_bid_date += temp;
            indBid.date+=temp;
            indBid.bidded.push(req.body.user_id);
            user.bidded.push(req.body.id);
            await indBid.save();
            await user.save();
            res.status(200).json(indBid);
        }
    }
        
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = placeBid;
