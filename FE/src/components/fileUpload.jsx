import { React, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Snackbar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const imgUploadApiKeyKeyEnvVar = "6df64de3597cea9656270f91ac17d508";

function FileUpload({ formData, setFormData }) {
  const [previewImages, setPreviewImages] = useState([]);
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const HandleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    const formDataToSend = new FormData();
    if (files.length === 0) {
      console.error("No files selected");
      return;
    }
    console.log(formData);
    Object.keys(formData).forEach((key) => {
      if (key !== "images") {
        if (Array.isArray(formData[key])) {
          formData[key].forEach((data) => {
            formDataToSend.append(key, JSON.stringify(data));
          });
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
    });

    if (formData.images) {
      formData.images.forEach((file) => {
        formDataToSend.append("images", file);
      });
    }
    console.log(JSON.stringify(formDataToSend));
    try {
      const response = await fetch(
        `https://www.imghippo.com/v1/upload?api_key=${imgUploadApiKeyKeyEnvVar}`,
        {
          method: "POST",
          mode: "cors",
          file: formDataToSend,
        }
      );
      if (!response.success) {
        throw new Error(`Failed to submit data: ${await response.text()}`);
      }
      const result = await response.json();

      console.log(`Images uploaded successfully!: ${result}`);

      console.log(result);
      const existingFiles = (formData.files || []).filter(
        (file) => file.link && file.title && file.size
      );
      const existingImages = formData.images || [];

      const existingFileNames = new Set(
        existingFiles.map((file) => file.title)
      );
      const existingImageNames = new Set(
        existingImages.map((file) => file.name)
      );

      const validFiles = [];
      const newPreviews = [];
      const validImages = [];
      console.log("here");
      files.forEach((file) => {
        if (file.size > MAX_FILE_SIZE) {
          setError(`${file.name} exceeds the size limit of 2MB.`);
          return;
        }
        //Check for duplicates then updates the file field in formData.
        if (!existingFileNames.has(file.name)) {
          validFiles.push({
            title: file.name,
            size: file.size,
            link: `${result.data.view_url}`,
          });

          newPreviews.push(URL.createObjectURL(file));
        }
        //Check for duplicates then updates the image field in formData.
        if (!existingImageNames.has(file.name)) {
          validImages.push({
            name: file.name,
            size: file.size,
            type: file.type,
          });
        }
      });

      if (validFiles.length > 0 || validImages.length > 0) {
        setFormData((prev) => ({
          ...prev,
          files: [...existingFiles, ...validFiles],
          images: [...existingImages, ...validImages],
        }));

        setPreviewImages((prev) => [...prev, ...newPreviews]);
      } else {
        console.warn("No new valid files to upload.");
      }
      // Reset file input after upload
      e.target.value = null;
      console.log("here");
    } catch (error) {
      console.error("Error:", error.message);
    }

    /* console.log(result);
    const existingFiles = (formData.files || []).filter(
      (file) => file.link && file.title && file.size
    );
    const existingImages = formData.images || [];

    const existingFileNames = new Set(existingFiles.map((file) => file.title));
    const existingImageNames = new Set(existingImages.map((file) => file.name));

    const validFiles = [];
    const newPreviews = [];
    const validImages = [];
    console.log("here");
    files.forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        setError(`${file.name} exceeds the size limit of 2MB.`);
        return;
      }
      //Check for duplicates then updates the file field in formData.
      if (!existingFileNames.has(file.name)) {
        validFiles.push({
          title: file.name,
          size: file.size,
          link: `${result.data.view_url}`,
        });

        newPreviews.push(URL.createObjectURL(file));
      }
      //Check for duplicates then updates the image field in formData.
      if (!existingImageNames.has(file.name)) {
        validImages.push({
          name: file.name,
          size: file.size,
          type: file.type,
        });
      }
    }); */
    /* console.log("here");
    if (validFiles.length > 0 || validImages.length > 0) {
      setFormData((prev) => ({
        ...prev,
        files: [...existingFiles, ...validFiles],
        images: [...existingImages, ...validImages],
      }));

      setPreviewImages((prev) => [...prev, ...newPreviews]);
    } else {
      console.warn("No new valid files to upload.");
    }
    // Reset file input after upload
    e.target.value = null;
    console.log("here"); */
  };

  const removeFile = (index, images, files) => {
    const newImages = [...formData[images]];
    const newFiles = [...formData[files]];
    const newPreviewImages = [...previewImages];

    newImages.splice(index, 1);
    newFiles.splice(index, 1);
    newPreviewImages.splice(index, 1);

    setFormData({ ...formData, [images]: newImages, [files]: newFiles });

    setPreviewImages(newPreviewImages);
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
      <TextField
        required
        type="file"
        inputProps={{ accept: "image/jpeg", multiple: true }}
        sx={{ width: "90%" }}
        onChange={(e) => HandleFileUpload(e)}
        name="images"
      />

      <Box>
        {previewImages.length > 0 && (
          <div>
            <Typography variant="h6">{t("selected_images")}</Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {previewImages.map((imageSrc, index) => (
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
                    onClick={() => removeFile(index, "images", "files")}
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

export default FileUpload;
