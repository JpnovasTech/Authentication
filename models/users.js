
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    mobile_number:{
        type:Number,
        unique:true,
        require : true
    },
    password:{
        type: String,
        default:'' 
    },
    firstname : {
        type : String,
        default : ''
    },
    lastname : {
        type : String,
        default : ''
    },
    email_id:{
        type:String,
        unique : true,
        require : false  
    },
    address : {
        address_road:{
            type:String,
            default : ''
        },
        address_taluka : {
            type:String,
            default : ''
        },
        address_Dist :{
            type:String,
            default : ''
        },
        address_state :{
            type:String,
            default : ''
        },
        address_pin : {
            type: Number,
            default : ''
        }
    },
    Role : {
        type: String,
        default: ''
    }
},
{
    timestamps: true
}
);

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',User);