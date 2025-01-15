import { Box, TextField, Typography } from '@mui/material';
import ClientExist from './ClientExist';

const ClientNew = ({
  newOrganizerName,
  setNewOrganizerName,
  newOrganizerAddress,
  setNewOrganizerAddress,
  newOrganizerWebsite,
  setNewOrganizerWebsite,
}) => {
  return (
    <>
      {' '}
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
          width: '100%',
          maxWidth: 600,
          boxShadow: 3,
          p: 4,
          m: 'auto',
          backdropFilter: 'blur(2px)',
        }}
      >
        <ClientExist />
        <Typography variant="h6" component="h2" gutterBottom>
          Är du ny arrangör eller företag?
        </Typography>
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="new-organizer-name"
          label="Namn"
          name="new-organizer-name"
          value={newOrganizerName}
          onChange={(e) => setNewOrganizerName(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="new-organizer-address"
          label="Adress"
          name="new-organizer-address"
          value={newOrganizerAddress}
          onChange={(e) => setNewOrganizerAddress(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="new-organizer-website"
          label="Hemsida"
          name="new-organizer-website"
          value={newOrganizerWebsite}
          onChange={(e) => setNewOrganizerWebsite(e.target.value)}
          className="text-field"
        />
      </Box>
    </>
  );
};

export default ClientNew;
