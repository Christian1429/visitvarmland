const express = require("express");
const DataController = require("../controllers/dataController");
const multer = require("multer");

const router = express.Router();
const dataController = new DataController();
const upload = multer({ storage: multer.memoryStorage() }).array("images", 10); //The number  shows how many images can be uploaded at the same time.
const testplatser = [
  { id: 1, title: "Mariebergsskogen" },
  { id: 2, title: "Sandgrundsudden" },
  { id: 3, title: "Brigadmuseet" },
];
router.put("/:id", dataController.updateData.bind(dataController));
router.post("/", dataController.createData.bind(dataController));
router.get("/", dataController.getAllData.bind(dataController));
router.delete("/:id", dataController.deleteData.bind(dataController));
router.get("/testplatser", (req, res) => {
  res.json(testplatser);
});

router.get("/:id", dataController.getData.bind(dataController));

///Image upload.

router.post("/upload", upload, dataController.uploadImage.bind(dataController));

module.exports = router;
