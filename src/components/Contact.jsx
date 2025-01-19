import { TextField, Box, Typography } from "@mui/material";
import BreadCrumbs from "../components/BreadCrumbs";
import { Link as routerLink } from "react-router-dom";

const Contact = ({
  name,
  setName,
  email,
  setEmail,
  address,
  setAddress,
  phone,
  setPhone,
  kommun,
  setKommun,
}) => {
  return (
    <>
      <BreadCrumbs />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
      >
        <Typography margin="dense" align="center">
          Dina kontaktuppgifter som tipsare.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1,
        }}
      >
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="name"
          label="Ditt namn"
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
          id="email"
          label="Email adress"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="address"
          label="Adress"
          name="address"
          autoComplete="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="phone"
          label="Telefon nummer"
          name="phone"
          autoComplete="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="text-field"
        />
      </Box>
    </>
  );
};

export default Contact;
