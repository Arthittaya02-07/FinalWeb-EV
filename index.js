const express = require ('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session') 
const flash = require('connect-flash')
const passport = require('passport')
// const fetch = require('node-fetch')


//MongoDB Connect
// mongoose.connect('mongodb+srv://admin:1234@cluster0.q6r432v.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://admin:1234@cluster0.q6r432v.mongodb.net/')



global.loggedIn = null

//Controller
const indexController = require('./controllers/indexController')
const loginController = require('./controllers/loginController')
const signUpController = require('./controllers/signUpController')
const storeUserController = require('./controllers/storeUserController')
const loginUserController = require('./controllers/loginUserController')
const logOutController = require('./controllers/logOutController')
const homeController = require('./controllers/homeController')
const verifyController = require('./controllers/verifyController')
const joinUsController = require('./controllers/joinUsController')
const profileController = require('./controllers/profileController')
const mapController = require('./controllers/mapController')
// const passportController = require('./controllers/passportController')

// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

require('./controllers/passportController')(passport)

//Middleware
const redirectIfAuth = require('./middleware/redirectIfAuth')
const authMiddleware = require('./middleware/authMiddleware')
const authgoogle = require('./auth')

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession ({
    secret: "node secret"
}))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId 
    next()
})
app.set('view engine','ejs')

app.get('/',indexController)
app.get('/home', homeController)
app.get('/LogIn',redirectIfAuth,loginController)
app.get('/SignUp',redirectIfAuth,signUpController)
app.post('/user/SignUp',redirectIfAuth,storeUserController)
app.post('/user/LogIn',redirectIfAuth,loginUserController)
app.get('/LogOut', logOutController)
app.get('/verify/:key', verifyController)
app.get('/Joinus', joinUsController)
app.get('/Profile',profileController)
app.get('/Map',authMiddleware,mapController)
app.use('/auth',redirectIfAuth,require('./auth'))



app.listen( 4000, () => {
    console.log("App listening on port 4000")
})