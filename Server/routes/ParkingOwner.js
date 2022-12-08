const express = require('express')
const router = express.Router()

const ParkingOwner = require('../controller/ParkingOwner')

router.get('/', ParkingOwner.index)
router.post('/show',ParkingOwner.show)
router.post('/store',ParkingOwner.store)
router.post('/update',ParkingOwner.update)

module.exports = router