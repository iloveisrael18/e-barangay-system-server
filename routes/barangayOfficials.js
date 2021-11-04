const express = require('express')
const router = express.Router()
const brgy_offi = require('../Models/barangayOfficialsModel')



router.get('/', async (req, res)=>{

    let brgyofficialsList = await brgy_offi.find()
    res.send(brgyofficialsList)

})

router.get('/:brgy_offi_id', async (req, res)=>{

    let brgy_offi_id = req.params.brgy_offi_id
    let brgyofficialsList = await brgy_offi.findOne({_id:brgy_offi_id})
    res.send(brgyofficialsList)

})

router.post('/', async (req, res)=>{
    
    let brgyOfficialsDetails = {
        brgy_id: req.body.brgy_id,
        pic_url: req.body.pic_url,
        fullname: req.body.fullname,
        dob: req.body.dob,
        age: req.body.age,
        gender: req.body.gender,
        religion: req.body.religion,
        marital_status: req.body.marital_status
    }
    
    let officials_check = await brgy_offi.findOne({ brgy_id: brgyOfficialsDetails.brgy_id, fullname: brgyOfficialsDetails.fullname})
    console.log(officials_check)
    if(officials_check) return res.status(400).send('Barangay official is already exist')

    try {
        let brgy_official = await brgy_offi.insertMany(brgyOfficialsDetails)
        res.send(brgy_official)
    } catch (error) {
        return res.status(400).send(error) 
    }
})



router.put('/:brgy_offi_id', async (req, res)=>{
    
    let brgy_offi_id = req.params.brgy_offi_id

    let brgyOfficialsDetails = {
        brgy_id: req.body.brgy_id,
        pic_url: req.body.pic_url,
        fullname: req.body.fullname,
        dob: req.body.dob,
        age: req.body.age,
        gender: req.body.gender,
        religion: req.body.religion,
        marital_status: req.body.marital_status
    }
    
    let officials_check = await brgy_offi.findOne({ brgy_id: brgyOfficialsDetails.brgy_id, fullname: brgyOfficialsDetails.fullname})
    if(officials_check) {
        if(officials_check._id != brgy_offi_id) return res.status(400).send('Barangay official is already exist')
    }

    try {
        let brgy_official = await brgy_offi.findOneAndUpdate({_id: brgy_offi_id },brgyOfficialsDetails, {new: true})
        res.send(brgy_official)
    } catch (error) {
        return res.status(400).send(error) 
    }
})





module.exports = router