const bcrypt = require("bcryptjs");
const bidder = require('../models/bidderModel.js')

const authenticateUser = async(req, res)=>{
    const user = await bidder.find({email: req.body.email});
    console.log(user);
    if(user.length===0){
        console.log("No user");
        return res.status(400).json({message: "No such user"});
    }
    try{
        // console.log(req.body.password, user.password);
        if(await bcrypt.compare(req.body.password, user[0].password)){
            console.log("User Send")
            res.status(200).json(user);
        }
        else{
            console.log("Password InCorrect")
            res.status(400).json({message: "Password incorrect"});
        }
    }catch(e){
        console.log("Pata nhi kya hua");
        res.status(400).json(e)
    }
}

module.exports = authenticateUser;