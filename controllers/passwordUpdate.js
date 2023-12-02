const User = require('../models/User')
const ObjectId = require('mongodb').ObjectId;

const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
  
    // console.log('uuidv4 >',uuidv4());
    console.log('ps req.body >',req.body);
    console.log('ps ObjectId(req.session.userId)',new ObjectId(req.session.userId));
    if(req.body.password === req.body.confirm_password) {
        bcrypt.hash(req.body.password, 10).then(hash => {
            console.log('ps hash>',hash);
            User.findOneAndUpdate(
                { _id: new ObjectId(req.session.userId) },
                { $set: { password: hash,repassword: req.body.confirm_password } },
                { new: true }
            ).then(() => {
                return res.redirect('/Profile')
            }).catch((error) => {    
                return res.redirect('/Profile')
            })
        }).catch(error => {
            return res.redirect('/Profile')
            console.error(error)
        })
    }else{
        return res.redirect('/Profile')
    }
    
}

