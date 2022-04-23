
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Role = new Schema({
    Role_id:{
        type:Number,
        unique:true,
        require : true
    },
    Role : {
        type : String,
        default : ''
    }
});

// 1 : Normal user
// 2 : Farmer 
// 3 : CSAdmin
// 4 : Super Admin

Role.plugin(passportLocalMongoose);
module.exports = mongoose.model('Role',Role);