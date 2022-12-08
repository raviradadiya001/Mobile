const { error } = require('console')
const { response } = require('express')
const User = require('../models/User')

// List of users
const index =(req,res,next) =>{
    User.find()
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
    let userID = req.body.userID
    User.findById(userID)
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

// store the user 

const store = (req,res,next ) =>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password,
    })
    user.save()
    .then(response =>{
        res.json({
            message:'User Added!'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured!'
        })
    })
}

// update user 
const update = (req,res,next) =>{
    let userID =req.body.userID

    let updateData = {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password,
    }
    User.findByIdAndUpdate(userID,{$set: updateData})
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