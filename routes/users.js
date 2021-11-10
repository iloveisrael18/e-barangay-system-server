const express = require('express')
const router = express.Router()
const users = require('../Models/userModel')
const bcrypt = require('bcrypt')
const aut = require('../Auth/Authentication')



router.get('/getuserbyhid/:hid',async (req, res) => {

    let hid = req.params.hid
    console.log(hid)
    let userdetails = await users.findOne({ HID: hid })
    console.log(userdetails)
    res.send(userdetails)
})


router.post('/',aut, async (req, res) => {

    let password = req.body.PASSWORD
    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(password, salt)

    let userDetails = {
        BARANGAYID: req.body.BARANGAYID,
        HID: req.body.HID,
        FIRSTNAME: req.body.FIRSTNAME,
        MIDDLENAME: req.body.MIDDLENAME,
        LASTNAME: req.body.LASTNAME,
        EMAIL: req.body.EMAIL,
        PASSWORD: hashedPassword,
        USERTYPE: req.body.USERTYPE,
    }

    try {
        let isExist = await users.findOne({EMAIL: userDetails.EMAIL})
        if(isExist) return res.status(400).send('Email already exist')

        let user = await users.insertMany(userDetails)
        res.send(user)
    } catch (error) {
        return res.status(400).send(error)
    }

})


module.exports = router

