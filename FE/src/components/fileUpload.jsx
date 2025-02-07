import { React, useContext, useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./fileupload.css";
import { FormDataContext } from "../context/FormDataContext";

function fileUpload(/* { formData, setFormData } */) {
  const { formData, setFormData } = useContext(FormDataContext);
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) {
      console.error("Inga filer valda");
      return;
    }

    const existingFiles = formData.images || [];
    const existingFileNames = new Set(existingFiles.map((file) => file.name));

    const newFiles = files.filter((file) => !existingFileNames.has(file.name));
    if (newFiles.length === 0) {
      console.warn("Dubbletter ignorerade");
      return;
    }

    /* console.log("selected file", files); */
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages((prev) => [...prev, ...newPreviews]);
    setFormData((prev) => ({
      ...prev,
      images: [...existingFiles, ...newFiles],
    }));
  };

  const removeImage = (index) => {
    // Remove file and preview at the selected index
    const newImages = [...formData.images];
    const newPreviewImages = [...previewImages];

    newImages.splice(index, 1); // Remove from formData images
    newPreviewImages.splice(index, 1); // Remove from preview state

    setFormData({ ...formData, images: newImages }); // Update formData context
    setPreviewImages(newPreviewImages); // Update preview images
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // ✅ Append other form fields correctly
    Object.keys(formData).forEach((key) => {
      if (key !== "images") {
        formDataToSend.append(key, formData[key]);
      }
    });

    // ✅ Append images correctly as files
    if (formData.images && formData.images.length > 0) {
      formData.images.forEach((file) => {
        formDataToSend.append("images", file);
      });
    }

    console.log("Submitting FormData:", formDataToSend);

    try {
      const response = await fetch("http://localhost:2000/api/data/upload", {
        method: "POST",
        mode: "cors",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`Failed to submit data: ${await response.text()}`);
      }

      console.log("Images uploaded successfully!");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <Box>
      <Typography sx={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
        Ladda upp bilder. Max 2MB
      </Typography>

      <TextField
        required
        type="file"
        inputProps={{ accept: "image/jpeg", multiple: true }}
        sx={{ width: "90%" }}
        onChange={handleFileUpload}
        name="images"
      />

      <Button
        onClick={(e) => {
          handleSubmit(e);
        }}
        variant="contained"
        color="primary"
        type="submit"
        sx={{ margin: "1rem", width: "50%" }}
      >
        Ladda upp
      </Button>

      {/* Preview selected images */}
      <Box>
        {previewImages.length > 0 && (
          <div>
            <Typography variant="h6">Valda bilder:</Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {previewImages.map((imageSrc, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    border: "1px solid #ccc",
                    padding: "0.5rem",
                  }}
                >
                  <img
                    src={imageSrc}
                    alt={`Preview ${index}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <IconButton
                    onClick={() => removeImage(index)}
                    sx={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
            </div>
          </div>
        )}
      </Box>
    </Box>
  );
}

export default fileUpload;
