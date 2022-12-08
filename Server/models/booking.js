const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingSchema = new Schema({
    userName:{
        type: String
    },
    userEmail:{
        type: String
    },
    parkingAddress:{
        type:String
    },
    duration:{
        type: String
    },
    totalRate:{
        type: String
    },
    date:{
        type: String
    },
    vehicleName:{
        type: String
    },
    vehicleNumber:{
        type: String
    }
    
},{timestamps: true})

const Booking = mongoose.model('Bookings', BookingSchema)
module.exports = Booking