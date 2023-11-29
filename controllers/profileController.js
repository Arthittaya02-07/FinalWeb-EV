
//ดึงข้อมูลมาแสดง
// const User = require('../models/User')

// module.exports = async (req, res) => {

//     let UserData = await User.findById(req.session.userId)
//         res.render('profile', {
//             UserData
//         })
// }

const User = require('../models/User')

module.exports = async (req, res) => {

        let UserData = await User.findById(req.session.userId)

        res.render('profile', {
            UserData
        })
}

// const User = require('../models/User')
// const google = require('../models/User')

// module.exports = async (req, res) => {

// if (google) {

//     let UserData = await google.findById(req.session.userId)

//         res.render('profile', {
//             UserData
//         })

// }
// if (user) {
//     let UserData = await User.findById(req.session.userId)

//         res.render('profile', {
//             UserData
//         })
// }
// }

   