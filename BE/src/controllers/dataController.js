const dataModel = require("../models/dataModel");

class DataController {
  constructor() {
    this.dataModel = dataModel;
  }

  async uploadImage(req, res) {
    console.log("here");
    console.log(req.body);
    try {
      const newImage = {
        filename: req.file.originalname,
        url: `/uploads/${req.file.originalname}`,
        contentType: req.file.mimetype,
        image: req.file.buffer, // Store binary data
        size: req.file.size,
        lastModifiedDate: req.file.lastModifiedDate,
        lastModified: req.file.lastModified,
      };
      console.log(newImage);
      const newData = new this.dataModel(newImage);
      await newData.save();

      res.json({ message: "Image uploaded successfully", image: newImage });
    } catch (error) {
      res.status(500).json({ error: "Image upload failed" });
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
