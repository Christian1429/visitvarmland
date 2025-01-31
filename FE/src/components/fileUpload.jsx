import React from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  TextField,
  Button,
} from "@mui/material";
import "./fileupload.css";

function fileUpload() {
  return (
    <Box>
      <Typography />
      <form className="fileupload">
        <TextField type="file" sx={{ width: "90%" }} />
        <Button
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
