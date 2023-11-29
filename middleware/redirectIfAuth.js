//ทำการตรวจสอบ หาก user ทำการ lod in เข้ามา

module.exports = (req , res , next) => {
    if (req.session.userId) {
        return res.redirect('/home')
    }
    next()
}