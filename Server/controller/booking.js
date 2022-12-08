const { error } = require('console')
const { response } = require('express')
const Booking = require('../models/booking')

// List of users
const index =(req,res,next) =>{
    Booking.find()
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
    let bookingID = req.body.bookingID
    Booking.findById(bookingID)
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
    let booking = new Booking({
       userName: req.body.userName,
       userEmail: req.body.userEmail,
       parkingAddress: req.body.parkingAddress,
       duration: req.body.duration,
        totalRate: req.body.totalRate,
       date: req.body.date,
       vehicleName: req.body.vehicleName,
       vehicleNumber: req.body.vehicleNumber,
    })
    booking.save()
    .then(response =>{
        res.json({
            message:'Booking Added!'
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
    let bookingID =req.body.bookingID

    let updateData = {
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        parkingAddress: req.body.parkingAddress,
        duration: req.body.duration,
        totalRate: req.body.totalRate,
        date: req.body.date,
        vehicleName: req.body.vehicleName,
        vehicleNumber: req.body.vehicleNumber,
    }
    Booking.findByIdAndUpdate(bookingID,{$set: updateData})
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