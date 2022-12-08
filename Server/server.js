const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const UserRoute = require('./routes/User')
const ParkingOwnerRoute = require('./routes/ParkingOwner')
const BookingRoute = require('./routes/booking')

mongoose.connect('mongodb://localhost:27017/ParkIT');
const db = mongoose.connection

db.on('error',(err) =>{
    console.log(err)

})

db.once('open', () =>{
    console.log('Database Connected!')
})

const app = express() 
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT ||  3000

app.listen(PORT, () =>{
    console.log('Server is running on port ${PORT}')
})

app.use('/api/user',UserRoute)
app.use('/api/parkingOwner',ParkingOwnerRoute)
app.use('/api/bookings',BookingRoute)