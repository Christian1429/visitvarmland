import { React, useContext } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import "./fileupload.css";
import { FormDataContext } from "../context/FormDataContext";

function fileUpload() {
  const { formData, setFormData } = useContext(FormDataContext);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files[0].size < 2000000) {
      if (files.length === 0) {
        console.error("No files selected");
        return;
      }

      // ✅ Store the file in FormDataContext
      setFormData((prev) => ({
        ...prev,
        images: [...(prev.images || []), files], // Store the file object
      }));
      console.log("All files", formData.images);
    } else {
      throw new Error("Failed to submit data, image size to large.");
    }
  };

  const handleSubmit = async (e) => {
    const requestOptions = {
      method: "POST",
      mode: "cors",
      body: submitData, // ✅ Let the browser set the correct headers
    };

    const response = await fetch(
      "http://localhost:2000/api/data/upload",
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`Failed to submit data: ${response}`);
    }
  };

  return (
    <Box>
      <Typography sx={{ marginTop: "1.5rem" }}>
        Ladda upp bilder. Max 2MB
      </Typography>
      <form onSubmit={handleSubmit} className="fileupload">
        <TextField
          required
          type="file"
          inputProps={{ accept: "image/jpeg", multiple: true }} // Fix missing name
          sx={{ width: "90%" }}
          onChange={handleFileUpload}
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
