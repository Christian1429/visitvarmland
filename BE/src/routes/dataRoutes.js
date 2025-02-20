const express = require("express");
const DataController = require("../controllers/dataController");

const router = express.Router();
const dataController = new DataController();
const upload = multer({ storage: multer.memoryStorage() }).array("images", 10); //The number  shows how many images can be uploaded at the same time.
const testplatser = [
  {
    id: 0,
    title: "Mariebergsskogen",
    presentation: "Sommaro",
    latitude: "40.7128",
    longitude: "-74.0060",
    accessibility: [
      {
        title: "Rullstolsanpassad",
        more_information: "Tillgänglig ingång finns",
      },
    ],
  },
  {
    id: 1,
    title: "Sandgrundsmuséet",
    presentation: "Sandgrund",
    latitude: "40.7128",
    longitude: "-74.0060",
    accessibility: [
      {
        title: "Rullstolsanpassad",
        more_information: "Tillgänglig ingång finns",
      },
    ],
  },
  {
    id: 2,
    title: "Brigadmuséet",
    presentation: "Militär",
    latitude: "40.7128",
    longitude: "-74.0060",
    accessibility: [
      {
        title: "Rullstolsanpassad",
        more_information: "Tillgänglig ingång finns",
      },
    ],
  },
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
