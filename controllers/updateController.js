const User = require('../models/User')
const ObjectId = require('mongodb').ObjectId;

const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

module.exports = (req, res) => {
  
    // console.log('uuidv4 >',uuidv4());
    console.log('req.body >',req.body);
    console.log('ObjectId(req.session.userId)',new ObjectId(req.session.userId));
    User.findOneAndUpdate(
        { _id: new ObjectId(req.session.userId) },
        { $set: { name: req.body.name,surname: req.body.surname } },
        { new: true }
    ).then(() => {
        return res.redirect('/Profile')
    }).catch((error) => {    
        return res.redirect('/Profile')
    })
}

