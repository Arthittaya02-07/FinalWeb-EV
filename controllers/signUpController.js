module.exports = (req, res) => {

    let email = ""
    let password = ""
    let repassword = ""
    let name = ""
    let surname = ""
    let birthday = ""
    let phone = ""
    let data = req.flash('data')[0]

    if (typeof data != "undefined") {
        email = data.email,
        password = data.password,
        repassword = data.repassword,
        name = data.name,
        surname = data.surname,
        birthday = data.birthday,
        phone = data.phone
    }
    res.render('SignUp' , {
        errors: req.flash('ValidationErrors'),
        email: email,
        password: password,
        repassword: repassword,
        name: name,
        surname: surname,
        birthday:birthday,
        phone:phone
    })
}