const dataModel = require("../models/dataModel");
const uploadImage = require("../utils/uploadImage");

class DataController {
  constructor() {
    this.dataModel = dataModel;
  }

  /* async createData(req, res) {
    console.log("req.body:", req.body);
    console.log("req.files:", req.files);

    try {
      // Ensure images exist
      const images =
        req.files?.images?.map((file) => {
          return {
            buffer: file.buffer, // This is the image binary data
            type: file.type, // Keep track of the file type
            name: file.name,
            size: file.size,
          };
        }) || [];

      // Save data, including image metadata (but not raw image data in DB)
      const newData = new this.dataModel({
        ...req.body,
        images, // Store image buffer or a reference to a cloud storage location
      });

      const savedData = await newData.save();
      res.status(201).json(savedData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
 */
  async createData(req, res) {
    console.log(req.body);
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
