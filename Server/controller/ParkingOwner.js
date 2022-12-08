const { error } = require('console')
const { response } = require('express')
const ParkingOwner = require('../models/ParkingOwner')

// List of users
const index =(req,res,next) =>{
    ParkingOwner.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'Error Occured!'
        })
    })
}

// SHow all data

const show = (req,res,next) =>{
    let ownerID = req.body.ownerID
    ParkingOwner.findById(ownerID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured!'
        })
    })
}

// store the Owner details 

const store = (req,res,next ) =>{
    let owner = new ParkingOwner({
        placename: req.body.placename,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        placeImage: req.body.placeImage,
        spots: req.body.spots,
        rate: req.body.rate,
    })
    owner.save()
    .then(response =>{
        res.json({
            message:'Owner Added!'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured!'
        })
    })
}

// update Owner 
const update = (req,res,next) =>{
    let ownerID =req.body.ownerID

    let updateData = {
        placename: req.body.placename,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        placeImage: req.body.placeImage,
        spots: req.body.spots,
        rate: req.body.rate,
    }
    ParkingOwner.findByIdAndUpdate(ownerID,{$set: updateData})
    .then(()=>{
        res.json({
            message:'User Updated!'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured!'
        })
    })
}

module.exports = {
    index,show,store,update
}