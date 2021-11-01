const express = require('express')
const router = express.Router()
const brgy = require('../Models/barangayModel')

router.get('/getregion', async (req, res)=>{

    let details = await brgy.distinct('Region')
    res.send(details)

})

router.get('/getprovice', async (req, res)=>{
    let region = req.body.region

    let details = await brgy.distinct('Province',{Region: region})
    res.send(details)

})

router.get('/getcity_municipality', async (req, res)=>{

    let province = req.body.province

    let city_municipality = await brgy.distinct('City_Municipality',{Province: province})
    res.send(city_municipality)
})

router.get('/getbarangay', async (req, res)=>{

    let city_municipality = req.body.city_municipality

    let barangay = await brgy.distinct('Barangay',{City_Municipality: city_municipality})
    res.send(barangay)
})



module.exports = router