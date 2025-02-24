const express = require("express");
const DataService = require('../services/dataServices');
const places = require("../data/places.json");
const router = express.Router();
const dataService = new DataService();

router.put('/:id', dataService.updateData.bind(dataService));
router.post('/', dataService.createData.bind(dataService));
router.get("/", dataService.getAllData.bind(dataService));
router.delete("/:id", dataService.deleteData.bind(dataService));
router.get('/places', (req, res) => {
  res.json(places);
});

router.get("/:id", dataService.getData.bind(dataService));

module.exports = router;
