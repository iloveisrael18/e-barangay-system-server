const express= require('express')
const router = express.Router()
const brgy = require('../Models/barangayModel')


router.get('/', async (req,res)=>{

    brgyList = await brgy.find()
    res.send(brgyList)
    
})

router.get('/:BARANGAY_ID', async (req,res)=>{

    let BARANGAY_ID = req.params.BARANGAY_ID
    brgyList = await brgy.findOne({_id: BARANGAY_ID})
    res.send(brgyList)
})


router.post('/', async (req,res)=>{

    let brgy_details = {
        Region: req.body.Region,
        Province: req.body.Province,
        City_municipality: req.body.City_municipality,
        Barangay: req.body.Barangay,
        Adress: req.body.Adress,
        landline_Number: req.body.landline_Number,
        Mobile_Number: req.body.Mobile_Number
    }
    //check if exist 
    let brgy_check = await brgy.findOne({Province: brgy_details.Province, City_municipality: brgy_details.City_municipality, Barangay: brgy_details.Barangay})
    console.log(brgy_check)
     if(brgy_check) return res.status(400).send('Brangay is already exist')
   
    try {
        let barangay = await brgy.insertMany(brgy_details)
        res.send(barangay)
    } catch (error) {
        return res.status(400).send(error)
    }

})



router.put('/', async (req,res)=>{

    let brgy_details = {
        _id: req.body.id,
        Region: req.body.Region,
        Province: req.body.Province,
        City_municipality: req.body.City_municipality,
        Barangay: req.body.Barangay,
        Adress: req.body.Adress,
        landline_Number: req.body.landline_Number,
        Mobile_Number: req.body.Mobile_Number
    }

    //check if exist 
    let brgy_check = await brgy.findOne({Province: brgy_details.Province, City_municipality: brgy_details.City_municipality, Barangay: brgy_details.Barangay})
    if(brgy_check) {
        if(brgy_check._id != brgy_details._id)
        {
            return res.status(400).send('Brangay is already exist')
        }
    }

    try {
        let barangay = await brgy.findOneAndUpdate({_id: brgy_details._id},brgy_details, {new: true})
        res.send(barangay)
    } catch (error) {
        return res.status(400).send(error)
    }

})




module.exports= router
