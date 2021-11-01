const express = require('express')
const router = express.Router()
const brgy = require('../Models/barangayModel')

router.get('/getregion', async (req, res)=>{

    let details = await brgy.distinct('Region')
    res.send(details)

})

router.get('/getcity_municipality', async (req, res)=>{

    let region = req.body.Region

    let city_municipality = await brgy.distinct('City_Municipality',{Region: region})
    res.send(city_municipality)
})

router.get('/getbarangay', async (req, res)=>{

    let city_municipality = req.body.City_Municipality

    let barangay = await brgy.distinct('Barangay',{City_Municipality: city_municipality})
    res.send(barangay)
})



module.exports = router