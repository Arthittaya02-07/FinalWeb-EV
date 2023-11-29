const User = require('../models/User')
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');


module.exports = (req, res) => {
  
    req.body.verificationToken = uuidv4();
    // console.log('uuidv4 >',uuidv4());
    // console.log('req.body >',req.body);
    
    User.create(req.body).then(() => {
        console.log("User Registered Successfully!")
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'kaanchita@gmail.com', // your email
              pass: 'zygx rzvl axvd azsy' // your email password
            }
        });
        let mailOptions = {
            from: 'sender@hotmail.com',                // sender
            to: 'arthittaya.jane@g.swu.ac.th',                // list of receivers
            subject: 'Hello from sender',              // Mail subject

            //เอาID แปะตรง localhost
            html: '<a href="http://localhost:4000/verify/'+req.body.verificationToken+'">Pleas Confirm Your Email</a>'   // HTML body
          };
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
        });

        // เมื่อแสดงข้อความเสร็จจะกลับไปหน้าแรก redirect
        res.redirect('/home')
    }).catch((error) => {
        // แสดงข้อมูล error บน terminal เรา
        // console.log(error.errors)

        if (error) {
            // map คือการวนลูปข้อมูล
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)

            // flash คือ middleware ที่กำหนดไว้ที่หน้า loginController.ejs แล้ว
            req.flash('valiationErrors', validationErrors)

            //เก็บข้อมูลให้คงอยู่ไว้ในช่อง กรณี user ไม่ได้กรอกข้อมูลช่องใดช่องหนึ่ง เมื่อกด submitแล้ว ข้อมูลก้ยังจะอยู่ user จะได้ไม่ต้องกรอกใหม่
            req.flash('data', req.body)

            return res.redirect('/SignUp')

        }
    })
}

