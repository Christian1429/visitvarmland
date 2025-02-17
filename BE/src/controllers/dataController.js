const dataModel = require("../models/dataModel");

class DataController {
  constructor() {
    this.dataModel = dataModel;
  }
  /*   async uploadData(req, res) {
    try {
      const parsedBody = {};
      Object.keys(req.body).forEach((key) => {
        try {
          parsedBody[key] = JSON.parse(req.body[key]); // Convert JSON back to object
        } catch (e) {
          parsedBody[key] = req.body[key]; // If it's not JSON, keep as string
        }
      });

      console.log("Parsed Form Data:", parsedBody);

      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "Ingen fil uppladdad" });
      }

      //Byt kontroller till frontend.
      //Länk till bild inte binärt.
      //

      // Define max file size (2MB)
      const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
      const Min_WIDTH = 600; // Allow only 640x640
      const Min_HEIGHT = 640;

      // Process each file
      const imageFiles = await Promise.all(
        req.files.map(async (file) => {
          // Check if file is a JPEG
          if (file.mimetype !== "image/jpeg") {
            throw new Error(
              `Filen ${file.originalname} måste vara en JPEG-bild!`
            );
          }

          // Check if the file size is within the allowed limit
          if (file.size > MAX_FILE_SIZE) {
            throw new Error(`Filen ${file.originalname} är för stor! Max 2MB.`);
          }

          const imageMetadata = await sharp(file.buffer).metadata();

          if (
            imageMetadata.width < Min_WIDTH ||
            imageMetadata.height < Min_HEIGHT
          ) {
            throw new Error(
              `Bilden ${file.originalname} måste vara lika med eller större än 600x640 pixlar.`
            );
          }

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
        title: parsedBody.title || "Ingen titel finns",
        description: parsedBody.description || "Ingen beskrivning finns",
        sales_text: parsedBody.sales_text || "Ingen säljande beskrivning finns",
        presentation: parsedBody.presentation || "Ingen presentation finns",
        open_hours: parsedBody.open_hours || "Inga öppettider finns",
        ticket_information:
          parsedBody.ticket_information || "Ingen biljet information finns",
        booking_link: parsedBody.booking_link || "Ingen bokningslänk finns",
        images: imageFiles || "Inga bilder finns",

        phone_numbers: parsedBody.phone_numbers || "Inga telefonnummer finns",

        websites: parsedBody.websites || "Inga hemsidor finns",

        prices: parsedBody.prices,
        organizers: parsedBody.organizers,
        contact: parsedBody.contact,
        occasions: parsedBody.occasions,

        is_trail: parsedBody.is_trail,
        number_of_trails: parsedBody.number_of_trails || 0,
        website_link:
          parsedBody.website_link || "Ingen länk till webbsida finns",
      });

      const savedData = await newData.save();
      console.log("Uppladdning lyckades!", savedData);

      res.status(201).json(savedData);
    } catch (error) {
      console.error("Fel vid uppladdning:", error.message);
      res.status(400).json({ message: error.message }); // Return error response
    }
  } */

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
