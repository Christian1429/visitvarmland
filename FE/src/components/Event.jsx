import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

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

  const descriptionPlaceholder = `Välkommen till ${title}`;
  
  return (
    <>
      <Typography
        component="h1"
        variant="h5"
        align="center"
        gutterBottom
        sx={{
          color: '#004338',
          fontWeight: 'bold',
          paddingTop: '1rem',
        }}
      >
        Evenemang
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
        }}
      >
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
          placeholder={descriptionPlaceholder}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
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
          required
          fullWidth
          id="hemsida"
          label="Hemsida"
          name="hemsida"
          autoComplete="hemsida"
          value={hemsida}
          onChange={(e) => setHemsida(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="kontaktuppgifter"
          label="Kontaktuppgifter"
          name="kontaktuppgifter"
          autoComplete="kontaktuppgifter"
          value={kontaktuppgifter}
          onChange={(e) => setKontaktuppgifter(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="ovrigInformation"
          label="Övrig Information"
          name="ovrigInformation"
          autoComplete="ovrigInformation"
          value={ovrigInformation}
          onChange={(e) => setOvrigInformation(e.target.value)}
          className="text-field"
        />
      </Box>
    </>
  );
};

export default Event;
