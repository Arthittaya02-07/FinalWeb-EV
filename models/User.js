const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema ({
    email : {
        type: String,
        required : [true, 'Please Enter Your Email'],
    },
    password: {
        type: String,
        required : [true, 'Please Enter Your password'],
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

//  app.post('/update-profile', async (req, res) => {
//     const { firstName, lastName } = req.body;
  
//     try {
//       // ค้นหาข้อมูลผู้ใช้ (ให้แก้ไขตามต้องการ)
//       const user = await User.findOneAndUpdate(
//         { /* ตั้งเงื่อนไขการค้นหา */ },
//         { $set: { firstName, lastName } },
//         { new: true }
//       );
  
//       res.json({ success: true, user });
//     } catch (error) {
//       console.error('เกิดข้อผิดพลาด:', error);
//       res.status(500).json({ success: false, error: 'Internal Server Error' });
//     }
//   });

const User = mongoose.model('User',UserSchema)
module.exports = User


