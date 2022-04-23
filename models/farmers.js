
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Farmer = new Schema({
    User_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Agricultural_Land : {
        Owned : {
            type : Number,
            require : true
        },
        Rented : {
            type : Number,
            require : true
        },
        Shared : {
            type : Number,
            require : true
        },
        Total : {
            type : Number,
            require : true
        }
    },
    Source_of_irrigation :{
        Tubewell : {
            Owned : {
                type : Number,
                require : true
            },
            Rented : {
                type : Number,
                require : true
            },
            Total : {
                type : Number,
                require : true
            }
        },
        Canal : {
            type : Number,
            require : true
        },
        Pumpset : {
            Solar : {
                type : Number,
                require : true
            },
            Diesel : {
                type : Number,
                require : true
            },
            Total : {
                type : Number,
                require : true
            }
        },
        Rainfed : {
            type : Number,
            require : true
        }     
    },
    Fertilizer_user :{
        DAP : {
            type : Number,
            require : true
        },
        Urea : {
            type : Number,
            require : true
        },
        NPK : {
            type : Number,
            require : true
        },
        Organic : {
            type : Number,
            require : true
        }
    }
},
{
    timestamps: true
}
);

Farmer.plugin(passportLocalMongoose);
module.exports = mongoose.model('Farmer',Farmer);