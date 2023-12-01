const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googleSchema = new mongoose.Schema({
    googleID: {
        type: String,
        required: true
    },
    displayname: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const googledata = mongoose.model('googledata', googleSchema);
// console.log(googleuser)
module.exports = googledata;
