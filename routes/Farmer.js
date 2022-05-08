const express = require("express");
const bodyParser = require("body-parser");
const users = require("../models/users");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();
router.use(bodyParser.json());

router.route("/join").post(verifyToken, (req, res, next) => {
  console.log("Inside Join Farmer Club");
  console.log(req.payload)
  // console.log(req.body.Pumpset.Solar)

    // let Data  = {
    //     mobile_number: req.body.mobile_number ,
    //     password: hash, 
    //     firstname : req.body.firstname,
    //     lastname : req.body.lastname,
    //     email_id: req.body.email_id,
    //     address_road:  req.body.address_road,
    //     address_taluka : req.body.address_taluka,
    //     address_Dist : req.body.address_Dist, 
    //     address_state : req.body.address_state,
    //     address_pin : req.body.address_pin,
    //     is_farmer : false 
    // };
    // users
    //   .create(newUser)
    //   .then(
    //     (data) => {
    //       console.log("New User Registered" + data);
    //       res.statusCode = 200;
    //       res.setHeader("content-type", "application/json");
    //       res.json(data);
    //     },
    //     (err) => next(err)
    //   )
    //   .catch((err) => next(err));
  });







// router.route('')

module.exports.router = router;
