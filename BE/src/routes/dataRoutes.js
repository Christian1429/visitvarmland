const express = require("express");
const DataController = require("../controllers/dataController");
const multer = require("multer");

const router = express.Router();
const dataController = new DataController();
const upload = multer({ storage: multer.memoryStorage() }).any();

router.post("/", dataController.createData.bind(dataController));
router.get("/", dataController.getAllData.bind(dataController));
router.get("/:id", dataController.getData.bind(dataController));
router.put("/:id", dataController.updateData.bind(dataController));
router.delete("/:id", dataController.deleteData.bind(dataController));

///Image upload.
/* router.post("/upload", upload, dataController.uploadImage.bind(dataController)); */

router.get("/test/retrieve", async (req, res) => {
  try {
    const data = await dataModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
