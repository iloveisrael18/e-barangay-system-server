const express = require('express')
const router = express.Router()
const cert = require('../Models/certrequestsModel')


router.get('/', async (req,res)=>{

    certRequests = await cert.find()
    res.send(certRequests)

})


router.post('/', async (req,res)=>{

    let body = req.body

    certrequestDetails = {
    hidno: body.hidno,
    requestorname: body.requestorname,
    certtype: body.certtype,
    requestdate: body.requestdate,
    daterecieved: body.daterecieved,
    
    }

    try {
        certrequest = await cert.insertMany(certrequestDetails)
        res.send(certrequest)
    } catch (error) {
        return res.status(400).send(error)
    }
    
})


module.exports = router