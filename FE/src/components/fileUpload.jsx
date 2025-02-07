import { React, useContext, useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormDataContext } from "../context/FormDataContext";
import { useTranslation } from 'react-i18next';

function FileUpload() {
  const { formData, setFormData } = useContext(FormDataContext);
  const [previewImages, setPreviewImages] = useState([]);
  const { t } = useTranslation();
  
  const HandleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    /* console.log("Selected files:", files); */
    if (files.length > 0) {
      setPreviewImages((prev) => [
        ...prev,
        ...Array.from(files).map((file) => URL.createObjectURL(file)),
      ]);
    }

    if (files.length === 0) {
      console.error("Inga filer valda");
      return;
    }
    const imagePreviews = files.map((file) => {
      return URL.createObjectURL(file); // Generate preview URL for the selected image
    });

    console.log("Generated previews:", imagePreviews);

    setFormData((prev) => {
      const updatedImages = [...(prev.images || []), ...files];
      return { ...prev, images: updatedImages };
    });
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

  const HandleSubmit = async (e) => {
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
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography sx={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
        {t('images_title')}
      </Typography>
      <TextField
        required
        type="file"
        inputProps={{ accept: 'image/jpeg', multiple: true }}
        sx={{ width: '90%' }}
        onChange={HandleFileUpload}
        name="image"
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ margin: '1rem', width: '8rem' }}
      >
        Ladda upp
      </Button>
      {/* Preview selected images */}
      <Box>
        {previewImages.length > 0 && (
          <div>
            <Typography variant="h6">Valda bilder:</Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {previewImages.map((imageSrc, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'relative',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                  }}
                >
                  <img
                    src={imageSrc}
                    alt={`Preview ${index}`}
                    style={{
                      width: '50px',
                      height: '50px',
                      objectFit: 'cover',
                    }}
                  />
                  <IconButton
                    onClick={() => removeImage(index)}
                    sx={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
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
