const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Define the branch schema
const partnerSchema = new Schema({

    _id: { type: String, required: true },
    zone: { type: Number, required: true },
    province: { type: Number, required: true },
    typeBusiness: { type: String,

    },
    typeCarpark:{type: String,

    },
   parking spaces :{

    }


  });
  
  // Create the branch model
  // Export the Branch model
  const partner= mongoose.model('partner',partnerSchema )
  module.exports = partner


