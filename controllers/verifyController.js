
const User = require('../models/User');

module.exports = (req, res) => {
    const { key } = req.params;

    User.findOneAndUpdate(
        { verificationToken: key, isVerified: false },
        { $set: { isVerified: true } },
        { new: true }
    )
    .then(user => {
        
        if (user) {
            res.redirect('/LogIn')
            // res.send('การยืนยันอีเมลเสร็จสมบูรณ์');
        } else {
            res.status(404).send('ไม่พบผู้ใช้หรือการยืนยันอีเมลไม่ถูกต้อง');
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).send('เกิดข้อผิดพลาดในระหว่างการยืนยันอีเมล');
    });
};
