import { React, useContext, useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormDataContext } from "../context/FormDataContext";
import { useTranslation } from "react-i18next";

function FileUpload() {
  const { formData, setFormData } = useContext(FormDataContext);
  const [previewImages, setPreviewImages] = useState([]);
  const { t } = useTranslation();
  const HandleFileUpload = (e) => {
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

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
        {t("images_title")}
      </Typography>
      <TextField
        required
        type="file"
        inputProps={{ accept: "image/jpeg", multiple: true }}
        sx={{ width: "90%" }}
        onChange={HandleFileUpload}
        name="images"
      />

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

export default FileUpload;
