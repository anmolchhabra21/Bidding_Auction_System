const express = require('express');
// const Workout = require('../models/workoutModel')

const {
    createBid,
} = require('../controllers/createBid.js')
const getActiveBids = require("../controllers/getActiveBids.js");
const placeBids = require('../controllers/placeBid.js');
const registerBidder = require('../controllers/register.js');
const loginBidder = require('../controllers/login.js');
const getMyBids = require('../controllers/getMyBids.js');


const router = express.Router();

router.get('/create-bid',createBid)

// get a asingle workout
router.get('/active-bids', getActiveBids)

router.post('/place-bid', placeBids)

router.post('/register', registerBidder)

router.post('/login', loginBidder)

router.post('/get-user-bids', getMyBids)
// router.delete('/:id',deleteWorkout)

// router.patch('/:id',updateWorkout)

module.exports = router