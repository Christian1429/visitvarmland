import React from 'react';
import { TextField, Box, Typography, useMediaQuery, FormControlLabel, Checkbox } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Contact = ({ formData, setFormData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        Fyll i dina uppgifter
      </Typography>
      <Typography
        align="center"
        gutterBottom
        sx={{
          color: '#004338',
          fontWeight: 'bold',
        }}
      >
        Följ alla steg
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
        <Box
          sx={{
            display: isMobile ? 'flex' : 'grid',
            flexDirection: isMobile ? 'column' : 'row',
            padding: isMobile ? '1rem' : '0',
            gap: 2,
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
          value={formData.contact[0].contact_name || ''}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              contact: [
                {
                  ...prevData.contact[0],
                  contact_name: e.target.value,
                },
              ],
            }))
          }
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="email"
          label="E-post"
          name="email"
          autoComplete="email"
          value={formData.contact[0].contact_email || ''}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              contact: [
                {
                  ...prevData.contact[0],
                  contact_email: e.target.value,
                },
              ],
            }))
          }
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
          value={formData.contact[0].contact_address || ''}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              contact: [
                {
                  ...prevData.contact[0],
                  contact_address: e.target.value,
                },
              ],
            }))
          }
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="phone"
          label="Telefonnummer"
          name="phone"
          autoComplete="phone"
          value={formData.contact[0].contact_number || ''}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              contact: [
                {
                  ...prevData.contact[0],
                  contact_number: e.target.value,
                },
              ],
            }))
          }
          className="text-field"
        />
          {/* <Box gridColumn="span 2">
            <FormControlLabel
              control={
                <Checkbox
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                name="consent"
                color="primary"
                required
                />
              }
              label="Jag samtycker till att mina uppgifter lagras och används enligt GDPR."
            />
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default Contact;
