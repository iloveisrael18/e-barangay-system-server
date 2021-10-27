const express = require('express')
const router = express.Router()
const db = require('../db')
const cnts = require('../Models/constituentsModel')

router.get('/', async (req, res) => {

    let constituentsList = await cnts.find()
    res.send(constituentsList)
})

router.get('/:hidno', async (req, res) =>{
    let hidno = req.params.hidno

    let constituent = await cnts.findOne({hidno: hidno})
    if(!constituent) return res.status(400).send('No matching constituent') 

    res.send(constituent)
})

router.post('/', async (req, res) => {
    let body = req.body
 
    let constituentDetails = {
        imgurl: body.imgurl,
        hidno: body.hidno,
        fname: body.fname,
        mname: body.mname,
        lname: body.lname,
        suffix: body.suffix,
        contactno: body.contactno,
        bdate: body.bdate,
        gender: body.gender,
        email: body.email,
        mstatus: body.mstatus,
        houseno: body.houseno,
        purok: body.purok,
        street: body.street,
        resyear: body.resyear,
        resfrom: body.resfrom,
        resto: body.resto

    }

    try {
        let constituent = await cnts.insertMany(constituentDetails)
        res.send(constituent)
    } catch (error) {
        return res.send(400).send(error)
    }

})

router.patch('/')

module.exports = router

