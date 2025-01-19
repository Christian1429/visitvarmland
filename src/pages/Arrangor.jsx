import { useState } from "react";
import postForm from "../api/PostForm";
import { Box, Typography, TextField } from "@mui/material";
import "./Form.css";
import BreadCrumbs from "../components/BreadCrumbs";
import CloseBtn from "../components/CloseBtn";
import SendBtn from "../components/SendBtn";

function arrangor(setOvrigInformationArrangor, ovrigInformationArrangor) {
  const handleFromDateChange = (newValue) => {
    setFromDate(
      newValue ? newValue.toDate().toLocaleDateString("sv-SE") : null
    );
  };

  const handleToDateChange = (newValue) => {
    setToDate(newValue ? newValue.toDate().toLocaleDateString("sv-SE") : null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      address,
      phone,
      fromDate,
      toDate,
      title,
      description,
      priser,
      hemsida,
      kontaktuppgifter,
      ovrigInformationArrangor,
      befintligArrangor,
      nyArrangor,
      setOvrigInformationArrangor,
    };
    await postForm(data);
  };

  return (
    <Box component="main" maxWidth="xs" className="container">
      <form onSubmit={handleSubmit}>
        <CloseBtn redirectUrl="https://visitvarmland.com" />
        <Box>
          <img
            src="/assets/logotyp-visitvarmland-svart.svg"
            alt="Visit Värmland Logo"
            style={{
              width: "150px",
              marginBottom: "20px",
              position: "absolute",
              top: "10px",
              left: "20px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          />
        </Box>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            color: "#004338",
            fontWeight: "bold",
            paddingTop: "4rem",
            paddingBottom: "1rem",
          }}
        >
          Tips och evenemang
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          <BreadCrumbs />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}
          >
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Namn på arrangör"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-field"
            />
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Telefonnummer till arrangör"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-field"
            />
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Hemsida"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-field"
            />
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Ladda upp filer"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-field"
            />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              width: "31rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              id="ovrigInformationArrangor"
              label="Övrig information arrangör"
              name="ovrigInformationArrangor"
              autoComplete="ovrigInformationArrangor"
              value={ovrigInformationArrangor}
              onChange={(e) => setOvrigInformationArrangor(e.target.value)}
              className="text-field"
              multiline
              rows={4}
            />
          </Box>
          <SendBtn />
        </Box>
      </form>
    </Box>
  );
}

export default arrangor;
