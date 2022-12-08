const mongoose = require('mongoose')
const Schema = mongoose.Schema

const parkingOwnerSchema = new Schema({
    placename:{
        type: String
    },
    address:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    placeImage:{
        type: String
    },
    spots:{
        type: String
    },
    rate:{
        type: String
    }
    
},{timestamps: true})

const ParkingOwner = mongoose.model('ParkingOwner', parkingOwnerSchema)
module.exports = ParkingOwner