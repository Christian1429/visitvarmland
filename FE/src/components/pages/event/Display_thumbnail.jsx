import React from "react";
import { Box } from "@mui/material";
const Display_thumbnail = ({ formData, index, visibility }) => {
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
          display: visibility ? "block" : "none",
        }}
      />
    </Box>
  );
};

export default Display_thumbnail;
