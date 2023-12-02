const mongoose = require('mongoose')
const User = require('../models/User')
const Schema = mongoose.Schema

const partnerSchema = new Schema({
    userId: { type: String, }, // อาจจะใช้ ref เพื่อเชื่อมกับ User
    zone: { type: String, },
    province: { type: String, },
    typeBusiness: { type: String },
    typeCarpark: { type: String },
    parkingSpaces: { type: String }
});

const Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;