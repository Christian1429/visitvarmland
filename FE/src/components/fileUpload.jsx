import { React, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import "./fileupload.css";

/* async function postcall(e) {
  try {
    console.log("File info working!");
    console.log(e.target.elements.input.value);
    const file = e.target.elements.fileInput.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setImages(formData);
    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "multipart/form-data" },
      body: { img: formData },
    };
    const response = await fetch(
      "http://localhost:5173/api/data/createData",
      requestOptions
    );
    const data = await response.json();
    setImages(data);
  } catch (error) {}
}

function fileUpload() {
  const [images, setImages] = useState();
  const handleUpload = (e) => {
    e.preventDefault();
    console.log("e", e);
    postcall(e);
  };

  return (
    <Box>
      <Typography sx={{ marginTop: "1.5rem" }}>
        Ladda upp bilder. Max 2MB
      </Typography>
      <form onSubmit={(e) => handleUpload(e)} className="fileupload">
        <TextField
          required
          type="file"
          slotProps={{
            multiple: true,
            accept: "image/jpeg",
          }}
          sx={{ width: "90%" }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: "1rem", width: "50%" }}
        >
          Ladda upp
        </Button>
      </form>
    </Box>
  );
} */

async function postcall(e, setImages) {
  try {
    console.log("File info working!");

    e.preventDefault(); // Prevent default form submission

    const file = e.target.elements.fileInput.files[0];
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    console.log("Uploading file:", file.name);

    const requestOptions = {
      method: "POST",
      mode: "cors",
      body: formData, // Correct body format
    };

    const response = await fetch(
      "http://localhost:2000/api/data/",
      requestOptions
    );

    if (!response.ok) {
      throw new Error("File upload failed");
    }

    const data = await response.json();
    setImages(data);
    console.log("Upload successful:", data);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

function fileUpload() {
  const [images, setImages] = useState(null);

  const handleUpload = (e) => {
    postcall(e, setImages);
  };

  return (
    <Box>
      <Typography sx={{ marginTop: "1.5rem" }}>
        Ladda upp bilder. Max 2MB
      </Typography>
      <form onSubmit={handleUpload} className="fileupload">
        <TextField
          required
          type="file"
          slotsProps={{ name: "fileInput", accept: "image/jpeg" }} // Fix missing name
          sx={{ width: "90%" }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: "1rem", width: "50%" }}
        >
          Ladda upp
        </Button>
      </form>
      {images && <p>Image uploaded successfully! ID: {images.fileId}</p>}
    </Box>
  );
}

export default fileUpload;
