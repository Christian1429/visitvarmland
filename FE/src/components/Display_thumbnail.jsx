import React from "react";
import { Box } from "@mui/material";
const Display_thumbnail = ({ formData, index }) => {
  return (
    <Box
      key={index}
      sx={{
        position: "relative",
        /* border: "1px solid #ccc", */
        padding: "0.5rem",
      }}
    >
      <img
        src={formData}
        alt={`Preview`}
        style={{
          width: "5rem",
          height: "2rem",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Display_thumbnail;
