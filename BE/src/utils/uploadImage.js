const sharp = require("sharp");

async function uploadImage(req) {
  /* console.log("Inside uploadImage", req); */
  try {
    /* console.log(req); */
    /* console.log(" !", req.files); */
    if (!req.files || req.files.length === 0) {
      console.log("error");
      return; /* res.status(400).json({ message: "Ingen fil uppladdad" }); */
    }

    // Define max file size (2MB)
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
    const Min_WIDTH = 600; // Allow only 640x640
    const Min_HEIGHT = 640; // Allow only 640x640

    // Process each file
    /* console.log("req files", req.images); */
    const imageFiles = await Promise.all(
      req.images.map(async (image) => {
        // Check if file is a JPEG
        if (image.type !== "image/jpeg") {
          throw new Error(`Filen ${image.name} måste vara en JPEG-bild!`);
        }

        // Check if the file size is within the allowed limit
        if (image.size > MAX_FILE_SIZE) {
          throw new Error(`Filen ${image.name} är för stor! Max 2MB.`);
        }

        // Use sharp to read image and get metadata (dimensions)
        const imageMetadata = await sharp(image.buffer).metadata();
        console.log("slutet");
        // Check if the image is exactly 640x640
        console.log("imageMetadata.width", imageMetadata.width);
        console.log("imageMetadata.height", imageMetadata.height);
        if (
          imageMetadata.width < Min_WIDTH ||
          imageMetadata.height < Min_HEIGHT
        ) {
          throw new Error(
            `Bilden ${image.name} måste vara lika med eller större än 600x640 pixlar.`
          );
        }

        console.log("slutet");
        // Return the file data for saving to DB
        return {
          name: image.name,
          size: image.size,
          type: image.type,
          image: image.buffer, // Store binary data
        };
      })
    );

    // Create a new database entry
    const newData = new this.dataModel({
      title: req.body.title || "Ingen titel",
      images: imageFiles, // Add images to database
    });

    const savedData = await newData.save();
    console.log("Uppladdning lyckades!", savedData);

    console.log(savedData);
    /* res.status(201).json(savedData); */
  } catch (error) {
    console.error("Fel vid uppladdning:", error.message);
    /* res.status(400).json({ message: error.message }); */ // Return error response
  }
}

module.exports = uploadImage;
