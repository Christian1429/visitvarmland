import { useState } from "react";
import { Box, Typography, Button, IconButton, Snackbar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

function ImgUpload({ formData, setFormData }) {
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const HandleFileUpload = async (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) {
      setError("error_no_files_selected");
      console.error("Inga filer valda");
      return;
    }

    const existingFiles = (formData.files || []).filter(
      (file) => file.link && file.title && file.size
    );
    const existingImages = formData.images || [];
    const existingPreviews = formData.previews || []; // Get existing previews

    const existingFileNames = new Set(existingFiles.map((file) => file.title));
    const existingImageNames = new Set(existingImages.map((file) => file.name));

    const validFiles = [];
    const validImages = [];
    const newPreviews = [];

    files.forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        setError(`${file.name} exceeds the size limit of 2MB.`);
        return;
      }

      // Check for duplicates before adding
      if (!existingFileNames.has(file.name)) {
        validFiles.push({
          title: file.name,
          size: file.size,
          link: `url/${file.name}`,
        });
      }

      if (!existingImageNames.has(file.name)) {
        validImages.push(file); // Store the actual File object
        newPreviews.push(URL.createObjectURL(file)); // Generate preview URL
      }
    });

    if (validFiles.length > 0 || validImages.length > 0) {
      setFormData((prev) => ({
        ...prev,
        files: [...existingFiles, ...validFiles],
        images: [...existingImages, ...validImages], // Store File objects
        previews: [...existingPreviews, ...newPreviews], // Store previews in formData
      }));
    } else {
      console.warn("No new valid files to upload.");
    }

    // Reset file input after upload
    e.target.value = null;
  };

  const removeFile = (index, images, files, previews) => {
    const newImages = [...formData[images]];
    const newFiles = [...formData[files]];
    const newPreviews = [...formData[previews]];

    newImages.splice(index, 1);
    newFiles.splice(index, 1);
    newPreviews.splice(index, 1);

    setFormData({
      ...formData,
      [images]: newImages,
      [files]: newFiles,
      [previews]: newPreviews, // Remove the preview as well
    });
  };

  const handleCloseError = () => {
    setError(""); // Close the error message
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
        {t("images_title")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "8px",
          width: "85%",
        }}
      >
        <input
          type="file"
          id="file-upload"
          accept="image/jpeg"
          multiple
          placeholder={t("upload_files")}
          style={{ opacity: "0", width: "1px", height: "1px" }}
          onChange={(e) => HandleFileUpload(e)}
        />
        <label htmlFor="file-upload">
          <Button variant="contained" component="span">
            {t("upload_files")}
          </Button>
        </label>
      </Box>

      <Box>
        {formData.previews && formData.previews.length > 0 && (
          <div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {formData.previews.map((imageSrc, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    border: "1px solid #ccc",
                    padding: "0.5rem",
                    margin: "0.5rem",
                  }}
                >
                  <img
                    src={imageSrc}
                    alt={`Preview ${index}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <IconButton
                    onClick={() =>
                      removeFile(index, "images", "files", "previews")
                    }
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

      {error && (
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={handleCloseError}
          message={error}
        />
      )}
    </Box>
  );
}

export default ImgUpload;
