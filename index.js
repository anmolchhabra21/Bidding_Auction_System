const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bidRoutes = require('./routes/entry.js');
require('dotenv').config()
// const passport = require('passport')
// const flash = require('express-flash');
// const session = require('express-session');


// const initializePassport = require('./passport-config.js');
// initializePassport(passport, 
//   (email)=>{
//     return (async()=>{
//       let user = await bidder.find({email: email});
//       if(user.length===0){
//         return null;
//       }
//       else{
//         return user[0];
//       }
//     })
//   },
//   (id)=>{
//     return (async()=>{
//       let user = await bidder.find({_id: id});
//       if(user.length===0){
//         return null;
//       }
//       else{
//         return user[0];
//       }
//     })
//   }
//   );

// app.use(flash());
// app.use(session({
//   secret: "secret",
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/login', (req, res)=>{
//   res.json({message: "Some Error Occured"})
// })
// app.post('/login', passport.authenticate('local',{
//   failureRedirect: '/login'
// }))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', bidRoutes);
// app.use(router);

// let mongoConnection = require('./models/db.js');


app.listen(3000, () => {
  console.log("Server running on port 3000");
  mongoose
    .connect(
      process.env.MONGO
    )
    .then(() => {
      console.log("Connected");
    })
    .catch((error) => {
      console.log(error);
    });
});
