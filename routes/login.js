const express = require('express')
const router = express.Router()
const users = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../Auth/Authentication')
const cors = require('cors')

router.post('/', cors() ,async (req, res)=>{

    let loginDetails = {}
    
    let userDetails = {
        EMAIL: req.body.EMAIL.toUpperCase(),
        PASSWORD: req.body.PASSWORD,
    }

    console.log(userDetails)
    let user = await users.findOne({EMAIL: userDetails.EMAIL})
    if(!user) return res.status(400).send('Invalid account')

    let validPass = await bcrypt.compare(userDetails.PASSWORD, user.PASSWORD)
    if(!validPass) return res.status(400).send('Invalid account')


    const token = await jwt.sign({user_id: user._id }, process.env.TOKEN_SECRET)
   // res.header('Authorization', token).send(token)
   loginDetails.user = user
   loginDetails.token = token
    
   res.status(200).send(loginDetails)
   
})

module.exports= router