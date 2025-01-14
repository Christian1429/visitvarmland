import { useState } from 'react';
import {
  TextField,
  Box,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

const Event = ({
  title,
  setTitle,
  description,
  setDescription,
  priser,
  setPriser,
  hemsida,
  setHemsida,
  kontaktuppgifter,
  setKontaktuppgifter,
  ovrigInformation,
  setOvrigInformation,
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
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 2,
      }}
    >
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
      <TextField
        variant="outlined"
        margin="dense"
        required
        fullWidth
        id="title"
        label="Titel"
        name="title"
        autoComplete="title"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-field"
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        variant="outlined"
        margin="dense"
        required
        fullWidth
        id="description"
        label="Beskrivning"
        name="description"
        autoComplete="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="text-field"
        sx={{ gridColumn: 'span 2' }}
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
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="kontaktuppgifter"
        label="Kontaktuppgifter för besökare"
        name="kontaktuppgifter"
        autoComplete="kontaktuppgifter"
        value={kontaktuppgifter}
        onChange={(e) => setKontaktuppgifter(e.target.value)}
        className="text-field"
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        variant="outlined"
        margin="dense"
        required
        fullWidth
        id="ovrigInformation"
        label="Övrig information"
        name="ovrigInformation"
        autoComplete="ovrigInformation"
        value={ovrigInformation}
        onChange={(e) => setOvrigInformation(e.target.value)}
        className="text-field"
        sx={{ gridColumn: 'span 2', paddingBottom: '1rem'}}
      />
    </Box>
  );
};

export default Event;
