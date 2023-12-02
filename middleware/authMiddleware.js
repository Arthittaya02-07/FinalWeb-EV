const User = require('../models/User')

module.exports = (req, res, next) => {
    User.findById(req.session.userId).then((user) => {
        if (!user) {
            return res.redirect('/LogIn')
        }
        console.log('User Logged In Successfully!')
        next()
    }).catch(error => {
        console.error(error)
    })
}