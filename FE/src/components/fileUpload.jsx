import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import "./fileupload.css";

function fileUpload() {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("/upload", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("test");
  };

  return (
    <Box>
      <Typography sx={{ marginTop: "1.5rem" }}>
        Ladda upp bilder. Max 2MB
      </Typography>
      <form className="fileupload">
        <TextField
          required
          type="file"
          accept="image/jpeg"
          slotProps={{
            multiple: true,
          }}
          sx={{ width: "90%" }}
        />

        <Button
          onClick={(event) => handleUpload(event.target.value)}
          variant="contained"
          color="primary"
          sx={{ margin: "1rem", width: "50%" }}
        >
          Ladda upp
        </Button>
      </form>
    </Box>
  );
}

export default fileUpload;
