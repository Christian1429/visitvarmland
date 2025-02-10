const dataModel = require("../models/dataModel");
const sharp = require("sharp");

class DataController {
  constructor() {
    this.dataModel = dataModel;
  }
  async uploadData(req, res) {
    try {
      console.log("req", req.files);
      console.log("req", req.body);
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "Ingen fil uppladdad" });
      }

      // Define max file size (2MB)
      const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
      const Min_WIDTH = 600; // Allow only 640x640
      const Min_HEIGHT = 640;

      // Process each file
      const imageFiles = await Promise.all(
        req.files.map(async (file) => {
          // Check if file is a JPEG
          console.log("file", file);
          if (file.mimetype !== "image/jpeg") {
            throw new Error(
              `Filen ${file.originalname} måste vara en JPEG-bild!`
            );
          }

          // Check if the file size is within the allowed limit
          if (file.size > MAX_FILE_SIZE) {
            throw new Error(`Filen ${file.originalname} är för stor! Max 2MB.`);
          }

          // Use sharp to read image and get metadata (dimensions)
          const imageMetadata = await sharp(file.buffer).metadata();
          // Check if the image is exactly 640x640
          /* console.log("imageMetadata.width", imageMetadata.width);
          console.log("imageMetadata.height", imageMetadata.height); */
          if (
            imageMetadata.width < Min_WIDTH ||
            imageMetadata.height < Min_HEIGHT
          ) {
            throw new Error(
              `Bilden ${file.originalname} måste vara lika med eller större än 600x640 pixlar.`
            );
          }

          // Return the file data for saving to DB
          return {
            name: file.originalname,
            size: file.size,
            type: file.mimetype,
            image: file.buffer, // Store binary data
          };
        })
      );

      // Create a new database entry
      const newData = new this.dataModel({
        title: req.body.title || "Ingen titel",
        description: req.body.description || "Ingen beskrivning",
        sales_text: req.body.sales_text || "Ingen säljande beskrivning finns",
        presentation: req.body.presentation || "Ingen presentation",
        open_hours: req.body.open_hours || "Inga öppetider",
        ticket_information:
          req.body.ticket_information || "Ingen biljet information",
        booking_link: req.body.booking_link || "Ingen booknings länk",
        images: imageFiles || "Inga bilder finns", // Add images to database
      });

      const savedData = await newData.save();
      console.log("✅ Uppladdning lyckades!", savedData);

      res.status(201).json(savedData);
    } catch (error) {
      console.error("Fel vid uppladdning:", error.message);
      res.status(400).json({ message: error.message }); // Return error response
    }
  }

  async createData(req, res) {
    console.log("req, be, created data", req.files);
    try {
      const newData = new this.dataModel(req.body);
      const savedData = await newData.save();
      res.status(201).json(savedData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getData(req, res) {
    try {
      const { id } = req.params;
      const data = await this.dataModel.findById(id);
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllData(req, res) {
    try {
      const data = await this.dataModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateData(req, res) {
    try {
      const { id } = req.params;
      const updatedData = await this.dataModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedData) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json(updatedData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteData(req, res) {
    try {
      const { id } = req.params;
      const deletedData = await this.dataModel.findByIdAndDelete(id);
      if (!deletedData) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = DataController;
