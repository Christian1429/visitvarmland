import { React, useContext } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import "./fileupload.css";
import { FormDataContext } from "../context/FormDataContext";

function fileUpload() {
  const { formData, setFormData } = useContext(FormDataContext);

  const handleFileUpload = (e) => {
    const files = e.target.files; // Convert FileList to an array
    if (files.length === 0) {
      console.error("No files selected");
      return;
    }
    console.log(files);

    // ✅ Store the file in FormDataContext
    setFormData((prev) => ({
      ...prev,
      images: [...(prev.images || []), files], // Store the file object
    }));
    console.log("All files", formData.images);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    console.log("All files, submit", formData);
    // Append all form fields to FormData
    for (const key in formData) {
      if (key === "images") {
        formData.images.forEach((image, index) => {
          submitData.append(`images[${index}]`, image);
        });
      } else {
        submitData.append(key, formData[key]);
        console.log("submit", submitData);
      }
    }

    try {
      const response = await fetch("http://localhost:2000/api/data/", {
        method: "POST",
        mode: "cors",
        body: submitData, // ✅ Send everything at once
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const data = await response.json();
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
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
