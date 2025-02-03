const dataModel = require("../models/dataModel");

class DataController {
  constructor() {
    this.dataModel = dataModel;
  }

  async uploadImage(req, res) {
    try {
      console.log("🟢 Inkommen förfrågan:", req.files);

      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "Ingen fil uppladdad" });
      }

      // Skapa en bildinstans och spara den i databasen
      /* const newImage = {
        name: req.file.originalname,
        size: req.file.size,
        type: req.file.mimetype,
        image: req.file.buffer, // Här lagras den binära datan
        encoding: req.file.encoding,
      }; */

      // Skapa bildobjekt från uppladdade filer
      const imageFiles = req.files.map((file) => ({
        name: file.originalname,
        size: file.size,
        type: file.mimetype,
        image: file.buffer, // ✅ Spara binärdata
        encoding: file.encoding,
      }));

      console.log("🟢 Bilder som ska sparas:", imageFiles);

      const newData = new this.dataModel({
        title: req.body.title || "Ingen titel",
        images: imageFiles, // Lägg till bilden i databasen
      });

      const savedData = await newData.save();
      res.status(201).json(savedData);
    } catch (error) {
      console.error("❌ Fel vid uppladdning:", error.message);
      res.status(500).json({ message: error.message });
    }
  }

  async createData(req, res) {
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
