const mongoose = require('mongoose')
const Schema = mongoose.Schema

const parkingOwnerSchema = new Schema({
    placename:{
        type: String
    },
    spots:{
        type: String
    },
    rate:{
        type: String
    },
    street:{
        type: String
    },
    city:{
        type: String
    },
    province:{
        type: String
    },
    postalcode:{
        type: String
    }
    
},{timestamps: true})

const ParkingOwner = mongoose.model('ParkingOwner', parkingOwnerSchema)
module.exports = ParkingOwner