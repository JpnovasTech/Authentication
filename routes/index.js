const express = require("express");
var router = express.Router();

var Autenticate = require("./Authenticate");
router.use("/users", Autenticate.router);

var Farmer = require("./Farmer");
router.use("/famerClub", Farmer.router);

module.exports.router = router;

