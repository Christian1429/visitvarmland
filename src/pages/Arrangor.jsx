import { useState } from "react";
import postForm from "../api/PostForm";
import { Box, Typography, TextField, Button } from "@mui/material";
import "./Form.css";
import BreadCrumbs from "../components/BreadCrumbs";
import CloseBtn from "../components/CloseBtn";
import SendBtn from "../components/SendBtn";

function arrangor() {
  // Kontact Arrangör
  const [name, setName] = useState("");
  const [ovrigInformationArrangor, setOvrigInformationArrangor] = useState("");
  const [telefonnummer, setTelefonNummer] = useState("");
  const [hemsida, setHemsida] = useState("");
  const [filer, setFiler] = useState("");
  const [kontakpersonArrangor, setKontakpersonArrangor] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      hemsida,
      ovrigInformationArrangor,
      kontakpersonArrangor,
      filer,
      telefonnummer,
      name,
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
              /* autoFocus */
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-field"
              sx={{
                boxShadow: 2,
              }}
            />
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="telefonnummer"
              label="Telefonnummer"
              name="telefonnummer"
              autoComplete="telefonnummer"
              autoFocus
              value={telefonnummer}
              onChange={(e) => setTelefonNummer(e.target.value)}
              className="text-field"
              sx={{
                boxShadow: 2,
              }}
            />
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="kontakpersonArrangor"
              label="Kontaktperson"
              name="kontakpersonArrangor"
              autoComplete="kontakpersonArrangor"
              autoFocus
              value={kontakpersonArrangor}
              onChange={(e) => setKontakpersonArrangor(e.target.value)}
              className="text-field"
              sx={{
                boxShadow: 2,
              }}
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
              value={hemsida}
              onChange={(e) => setHemsida(e.target.value)}
              className="text-field"
              sx={{
                boxShadow: 2,
              }}
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
            {" "}
            <Button
              component="label"
              variant="outlined"
              margin="dense"
              id="laddaUppFiler"
              label="Ladda upp filer"
              name="laddaUppFiler"
              sx={{ marginBottom: "1rem", boxShadow: 2 }}
            >
              Ladda upp filer/ .png / .jpg
              <input
                type="file"
                accept="image/png, .jpg"
                hidden
                value={filer}
                onChange={(e) => setFiler(e.target.value)}
              />
            </Button>
            <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              id="ovrigInformationArrangor"
              label="Övrig information om arrangören"
              name="ovrigInformationArrangor"
              autoComplete="ovrigInformationArrangor"
              value={ovrigInformationArrangor}
              onChange={(e) => setOvrigInformationArrangor(e.target.value)}
              className="text-field"
              multiline
              rows={4}
              sx={{
                boxShadow: 2,
              }}
            />
          </Box>
          <SendBtn />
        </Box>
      </form>
    </Box>
  );
}

export default arrangor;
