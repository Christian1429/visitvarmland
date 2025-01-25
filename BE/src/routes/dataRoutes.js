const express = require('express');
const DataController = require('../controllers/dataController');

const router = express.Router();
const dataController = new DataController();

router.post('/', dataController.createData.bind(dataController));
router.get('/', dataController.getAllData.bind(dataController));
router.get('/:id', dataController.getData.bind(dataController));
router.put('/:id', dataController.updateData.bind(dataController));
router.delete('/:id', dataController.deleteData.bind(dataController));

router.get('/test/retrieve', async (req, res) => {
  try {
    const data = await dataModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;