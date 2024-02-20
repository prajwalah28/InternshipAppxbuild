const express = require("express");
// const { authenticate } = require("./../auth/verifyToken.js");
const { getCheckoutSession } = require("../Controllers/bookingController");

const router = express.Router();

router.post('/checkout-session/:doctorId',getCheckoutSession);

module.exports = router;
