const express = require('express')
const router = express.Router()
const cnts = require('../Models/constituentsModel')

router.get('/', async (req, res) => {

    let constituentsList = await cnts.find()
    res.send(constituentsList)
})

router.get('/:hidno', async (req, res) =>{
    let hidno = req.params.hidno

    try {
        if(hidno == null) return res.send('Please provide HID No.')

        let constituent = await cnts.findOne({hidno: hidno})
        if(!constituent) return res.status(400).send('HID No. not found') 
    
        res.send(constituent)
    } catch (error) {
       return res.status(400).send(Error)
    }

  
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

     //check existing
    let hidExist = await cnts.findOne({hidno: constituentDetails.hidno})
    if(hidExist) return res.status(400).send('HID no. already exist')
   
    try {
        let constituent = await cnts.insertMany(constituentDetails)
        res.send(constituent)
    } catch (error) {
        return res.status(400).send(error)
    }

})

router.put('/:hidno', async (req, res)=>{
    let hidno = req.params.hidno
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
        let constituents = await cnts.findOneAndUpdate({hidno: hidno}, constituentDetails, { new: true })
        if(!constituents) return res.status(400).send('HID no. not found')
        res.send(constituents)

    } catch (error) {
        return res.status(400).send('Unable to update constituent: ' + error)
    }
})

module.exports = router

