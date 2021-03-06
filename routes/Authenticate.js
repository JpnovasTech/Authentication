const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const users = require("../models/users");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();
router.use(bodyParser.json());

router.route("/register").post((req, res, next) => {
  console.log("Inside User Register");
  bcrypt.hash(req.body.password, 8, (error, hash) => {
    let newUser = {
        mobile_number: req.body.mobile_number ,
        password: hash, 
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email_id: req.body.email_id,
        address : req.body.address
    };
    users
      .create(newUser)
      .then(
        (data) => {
          console.log("New User Registered" + data);
          res.statusCode = 200;
          res.setHeader("content-type", "application/json");
          res.json(data);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });
});

router.route("/login").post((req, res, next) => {
  console.log("Inside UserRouter Login");
  console.log(req.body)
  users
    .find({ mobile_number: req.body.username })
    .then((data) => {
      bcrypt.compare(req.body.password, data[0].password, (error, verify) => {
        if (error) {
          console.log(error);
          res.status(503).json({
            message: "Bcryptjs Error",
          });
        } else if (verify === false) {
          res.status(400).json({
            message: "Wrong Username or Password",
          });
        } else {
          console.log(data)
          jwt.sign(
            {
              userid: data[0]._id,
              mobile_number: data[0].mobile_number,
              id : data[0]._id,
              role : data[0].Role
            },
            config.secretKey,
            (error, token) => {
              if (error) {
                console.log(error);
                res.status(500).json({ message: "Token generation Failed" });
              } else {
                // token generated
                console.log("Token generated");
                res.status(200).json({ token: token, role:data[0].Role });
              }
            }
          );
        }
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// router.route("/getUserInfo").get(verifyToken, (req, res, next) => {
//   console.log("getuserInfo");
//   users
//     .findOne({ mobile_number: req.payload.mobile_number })
//     .select({ password: 0})
//     .then(
//       (user) => {
//         res.status(200).json(user);
//       },
//       (err) => next(err)
//     )
//     .catch((err) => next(err));
// });

// router.route("/profileUpdate").post(verifyToken, (req, res, next) => {
//   var mobile_number = req.payload.mobile_number;
//   console.log(req.body);
//   users
//     .updateOne(
//       { mobile_number: mobile_number },
//       { $set: req.body.users },
//       { $new: true }
//     )
//     .then(
//       (user) => {
//         res.status(200).json(user);
//       },
//       (err) => next(err)
//     )
//     .catch((err) => next(err));
// });



router.route('')

module.exports.router = router;
