let express = require('express');
let router = express.Router();
let sequelize = require ('../db')
let User = sequelize.import('../models/user.js')

//**Notes** //
//Create a new endpoint : /create
//The endpoint is going to be a post request
//Have an object that matches the model of UserTable (email/password).
//Let sequelize create a new record in the database (create)
// ***************// 

router.post('/create', function(req, res) {
       let userModel = {
           email: 'user@email.com', 
           password: 'Password1234'
       };

 User.create(userModel).then(
     res.send("Checking my user/create endpoint")
 );
})






// const router = require('express').Router()
// const User = require ('../db').import('../models/user.js');
// ^^ another way of coding this
module.exports = router; 