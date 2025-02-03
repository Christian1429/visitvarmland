import { React, useContext } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import "./fileupload.css";
import { FormDataContext } from "../context/FormDataContext";

function fileUpload() {
  const { formData, setFormData } = useContext(FormDataContext);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => file.size < 2000000);
    if (validFiles.length === 0) {
      console.error("Inga giltiga filer valda");
      return;
    }

    // ✅ Store the file in FormDataContext
    setFormData((prev) => {
      const updatedImages = [...(prev.images || []), ...validFiles];
      return { ...prev, images: updatedImages };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    formData.images.forEach((file) => {
      formDataToSend.append("images", file);
    });

    const requestOptions = {
      method: "POST",
      mode: "cors",
      body: formDataToSend,
    };

    try {
      const response = await fetch(
        "http://localhost:2000/api/data/upload",
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`Failed to submit data: ${JSON.stringify(response)}`);
      }
      console.log("Bilder uppladdade!");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <Box>
      <Typography sx={{ marginTop: "1.5rem" }}>
        Ladda upp bilder. Max 2MB
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="fileupload"
        encType="multipart/form-data"
      >
        <TextField
          required
          type="file"
          inputProps={{ accept: "image/jpeg", multiple: true }}
          sx={{ width: "90%" }}
          onChange={handleFileUpload}
          name="images"
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
}

export default fileUpload;
