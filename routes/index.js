const express = require("express");
var router = express.Router();

var Autenticate = require("./Authenticate");
router.use("/users", Autenticate.router);

module.exports.router = router;

