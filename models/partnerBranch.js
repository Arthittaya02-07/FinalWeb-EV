// const mongoose = require('mongoose')
// const User = require('../models/User')
// const Schema = mongoose.Schema

// const partnerSchema = new Schema({

//     _id: { type: String, required: true },
//     zone: { type: Number, required: true },
//     province: { type: Number, required: true },
//     typeBusiness: { type: String,

//     },
//     typeCarpark:{type: String,

//     },
//    parkingSpaces :{type: String,

//     }


//   });
  

//   const partner= mongoose.model('partner',partnerSchema )
//   module.exports = partner

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    userId: { type: String, required: true }, // อาจจะใช้ ref เพื่อเชื่อมกับ User
    zone: { type: String, required: true },
    province: { type: String, required: true },
    typeBusiness: { type: String },
    typeCarpark: { type: String },
    parkingSpaces: { type: String }
});

const Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;

  


