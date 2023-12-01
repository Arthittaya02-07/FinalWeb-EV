const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema ({
    email : {
        type: String,
        required : [true, 'Please Enter Your Email'],
        // match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
    },
    password: {
        type: String,
        required : [true, 'Please Enter Your password'],
        // validate: {
        //     validator: function(value) {
        //         const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
        //         return regex.test(value);
        //     },
        //     message: 'Password must be at least 8 characters long and include at least one digit, one lowercase, one uppercase, and one special character.',
        // },
    },
    repassword: {
        type: String,
        required : [true, 'Please Enter Your Repeat password']
    },
    name: {
        type: String,
        required : [true, 'Please Enter Your First Name']
    },
    surname: {
        type: String,
        required : [true, 'Please Enter Your Last Name']
    },
    birthday: {
        type: String,
        required : [true, 'Please Enter Your Birthday']
    },
    phone: {
        type: String,
        required : [true, 'Please Enter Your Number Phone']
    },
    gender: {
        type: String,
        default: 'male',
        enum: ['male', 'female']
    },
    userType: {
        type: String,
        default: 'user',
        enum: ['user', 'partner']
    },
    isVerified: { type: Boolean, default: false },
    verificationToken: {type: String},
    
})

UserSchema.pre('save',function(next) {
    const user = this

    bcrypt.hash(user.password, 10).then(hash => {
        user.password = hash
        next()
    }).catch(error => {
        console.error(error)
    })
 })

const User = mongoose.model('User',UserSchema)
module.exports = User


