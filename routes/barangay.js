const express= require('express')
const router = express.Router()
const brgy = require('../Models/barangayModel')


router.get('/', async (req,res)=>{

    brgyList = await brgy.find()
    res.send(brgyList)
})

router.get('/:brgyid', async (req,res)=>{

    let brgy_id = req.params.brgyid
    brgyList = await brgy.findOne({_id: brgy_id})
    res.send(brgyList)
})


router.post('/', async (req,res)=>{

    let brgy_details = {
        logo_url: req.body.logo_url,
        picture_url: req.body.picture_url,
        province_name: req.body.province_name,
        city_municipality_name: req.body.city_municipality_name,
        brgy_name: req.body.brgy_name,
        brgy_address: req.body.brgy_address,
        brgy_contact: req.body.brgy_contact
    }
    //check if exist 
    let brgy_check = await brgy.findOne({province_name: brgy_details.province_name, city_municipality_name: brgy_details.city_municipality_name, brgy_name: brgy_details.brgy_name})
    console.log(brgy_check)
     if(brgy_check) return res.status(400).send('Brangay is already exist')
   
    try {
        let barangay = await brgy.insertMany(brgy_details)
        res.send(barangay)
    } catch (error) {
        return res.status(400).send(error)
    }

})



router.put('/:brgy_id', async (req,res)=>{

    let brgy_id = req.params.brgy_id

    let brgy_details = {
        logo_url: req.body.logo_url,
        picture_url: req.body.picture_url,
        province_name: req.body.province_name,
        city_municipality_name: req.body.city_municipality_name,
        brgy_name: req.body.brgy_name,
        brgy_address: req.body.brgy_address,
        brgy_contact: req.body.brgy_contact
    }

    //check if exist 
    let brgy_check = await brgy.findOne({province_name: brgy_details.province_name, city_municipality_name: brgy_details.city_municipality_name, brgy_name: brgy_details.brgy_name})
    if(brgy_check) {
        if(brgy_check._id != brgy_id)
        {
            return res.status(400).send('Brangay is already exist')
        }
    }

    try {
        let barangay = await brgy.findOneAndUpdate({_id: brgy_id},brgy_details, {new: true})
        res.send(barangay)
    } catch (error) {
        return res.status(400).send(error)
    }

})




module.exports= router
