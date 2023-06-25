const bcrypt = require("bcryptjs");
const bidder = require("../models/bidderModel.js");

const registerBidder = async(req, res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await bidder.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        res.status(200).json(user);
    }
    catch(err){
        res.redirect('/register');
    }
}

module.exports = registerBidder;