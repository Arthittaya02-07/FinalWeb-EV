const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Define the branch schema
const partnerSchema = new Schema({

    _id: { type: String, required: true },
    zone: { type: Number, required: true },
    province: { type: Number, required: true },
    typeBusiness: { type: String,

    },
    typeCarpark:{type: String,

    },
   parking spaces :{

    }


  });
  
  // Create the branch model
  // Export the Branch model
  const partner= mongoose.model('partner',partnerSchema )
  module.exports = partner


  module.exports = (req, res) => {
    const { email, password, } = req.body

    User.findOne({email: email}).then((user) => {
        console.log(user)

        if (user) {
            let cmp = bcrypt.compare(password, user.password).then((match) => {
                if (match) {
                    req.session.userId = user._id
                    console.log(user._id)
    
                    res.redirect('/home')
                }else {
                    res.redirect('LogIn')
                }
            })
        } else {
            res.redirect('LogIn')
        }
    })
}