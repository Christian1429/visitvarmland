import { useState } from "react";
import {
  TextField,
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

const Event = ({
  title,
  setTitle,
  description,
  setDescription,
  priser,
  setPriser,
  hemsida,
  setHemsida,
  tillganglighet,
  setTillganglighet,
  ovrigInformation,
  setOvrigInformation,
  plats,
  setPlats,
  saljandeBeskrivning,
  setSaljandeBeskrivning,
}) => {
  const [befintligArrangor, setBefintligArrangor] = useState(false);
  const [nyArrangor, setNyArrangor] = useState(false);

  const handleBefintligArrangorChange = (event) => {
    setBefintligArrangor(event.target.checked);
    if (event.target.checked) {
      setNyArrangor(false);
    }
  };

  const handleNyArrangorChange = (event) => {
    setNyArrangor(event.target.checked);
    if (event.target.checked) {
      setBefintligArrangor(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gap: 1,

          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 2fr)",
            gap: 2,
            marginLeft: 4,
          }}
        >
          {" "}
          <FormControlLabel
            control={
              <Checkbox
                checked={befintligArrangor}
                onChange={handleBefintligArrangorChange}
                name="befintligArrangor"
              />
            }
            label="Befintlig arrangör"
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 2fr)",
            gap: 1,
            padding: 1,
            marginLeft: 4,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={nyArrangor}
                onChange={handleNyArrangorChange}
                name="nyArrangor"
              />
            }
            label="Ny arrangör"
          />
        </Box>
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="plats"
          label="Adress till evenemanget"
          name="plats"
          autoComplete="plats"
          value={plats}
          onChange={(e) => setPlats(e.target.value)}
          className="text-field"
          sx={{ gridColumn: "span 2", boxShadow: 2 }}
        />
        <TextField
          variant="outlined"
          margin="dense"
          required="required"
          fullWidth
          id="Namn_pa_evenemang"
          label="Namn på evenemanget"
          name="Namn_pa_evenemang"
          autoComplete="Namn på evenemanget"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
          slotProps={{ htmlInput: { minLength: 12 } }}
          sx={{ gridColumn: "span 2", boxShadow: 2 }}
        />
        <TextField
          variant="outlined"
          margin="dense"
          required="required"
          fullWidth
          id="saljandeBeskrivning"
          label="Säljande beskrivning av evenemanget"
          name="saljandeBeskrivning"
          autoComplete="saljandeBeskrivning"
          value={saljandeBeskrivning}
          onChange={(e) => setSaljandeBeskrivning(e.target.value)}
          className="text-field"
          sx={{ gridColumn: "span 2", boxShadow: 2 }}
          multiline
          rows={3}
          slotProps={{ htmlInput: { maxLength: 200, minLength: 100 } }}
        />
        <TextField
          variant="outlined"
          margin="dense"
          required="required"
          fullWidth
          id="description"
          label="Beskrivning av evenemanget"
          name="description"
          autoComplete="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-field"
          sx={{ gridColumn: "span 2", boxShadow: 2 }}
          multiline
          rows={6}
          slotProps={{ htmlInput: { maxLength: 400, minLength: 100 } }}
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          id="priser"
          label="Priser"
          name="priser"
          autoComplete="priser"
          value={priser}
          onChange={(e) => setPriser(e.target.value)}
          className="text-field"
          sx={{ boxShadow: 2 }}
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          id="hemsida"
          label="Eventuell hemsida"
          name="hemsida"
          autoComplete="hemsida"
          value={hemsida}
          onChange={(e) => setHemsida(e.target.value)}
          className="text-field"
          sx={{ boxShadow: 2 }}
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="tillganglighet"
          label="Beskriv tillgängligheten på evenemanget"
          name="tillganglighet"
          autoComplete="tillganglighet"
          value={tillganglighet}
          onChange={(e) => setTillganglighet(e.target.value)}
          className="text-field"
          multiline
          rows={3}
          sx={{ gridColumn: "span 2", boxShadow: 2 }}
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          id="ovrigInformation"
          label="Övrig information"
          name="ovrigInformation"
          autoComplete="ovrigInformation"
          value={ovrigInformation}
          onChange={(e) => setOvrigInformation(e.target.value)}
          className="text-field"
          multiline
          rows={3}
          sx={{ gridColumn: "span 2", boxShadow: 2 }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 2fr)",
        }}
      >
        <Typography
          variant="body"
          component="body"
          margin="dense"
          align="center"
          gutterBottom
          sx={{
            borderWidth: "0.15rem",
            borderStyle: "solid",
            width: "30rem",
            fontWeight: "bold",
            borderRadius: ".8rem",
            background: "white",
            padding: "1rem",
            boxShadow: 2,
            marginTop: "2rem",
          }}
        >
          Vi på Visit Värmland förbehåller oss rätten att ändra innehållet i ett
          tips. Vi förbehåller oss även rätten att redigera eller avlägsna all
          information från webbplatsen utan förvarning. Vi reserverar oss för
          felskrivningar och tekniska problem i samband med prisangivelser.
          Visit Värmland godkänner inte tips om religiösa/andlighetsevenmang
          eller politiska evenmang.
        </Typography>

        <FormControlLabel
          sx={{
            align: "center",
            justifyContent: "center",
            fontWeight: "bold",
            color: "white",
            padding: "1rem",
          }}
          control={
            <Checkbox
              checked={nyArrangor}
              required
              onChange={handleNyArrangorChange}
              name="nyArrangor"
            />
          }
          label="Jag har läst vilkoren ovan och förstår innehållet."
        />
      </Box>
    </>
  );
};

export default Event;
