const express = require('express')
const router = express.Router()

const ParkingOwner = require('../controller/ParkingOwner')

router.get('/', ParkingOwner.index)
router.post('/show',ParkingOwner.show)
router.post('/store',ParkingOwner.store)
router.post('/update',ParkingOwner.update)

router.post("/addParking", async (req, res) => {
    const data = new Model({
        placename: req.body.placename,
        spots: req.body.spots,
        rate: req.body.rate,
        street: req.body.street,
        city: req.body.city,
        province: req.body.province,
        postalcode: req.body.postalcode,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });

  router.get("/getAllParking", async (req, res) => {
    try {
      const data = await Model.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });

module.exports = router