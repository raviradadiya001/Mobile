const express = require('express')
const router = express.Router()

const BookingController = require('../controller/booking')

router.get('/', BookingController.index)
router.post('/show',BookingController.show)
router.post('/store',BookingController.store)
router.post('/update',BookingController.update)

module.exports = router