import React from 'react';
import {
  TextField,
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const Contact = ({ formData, setFormData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

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
        {t('contact_title')}
      </Typography>
      <Typography
        align="center"
        gutterBottom
        sx={{
          color: '#004338',
          fontWeight: 'bold',
        }}
      >
        {t('sub_title')}
      </Typography>
      {/* Contact box */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          boxShadow: 3,
          p: 4,
          m: 'auto',
          backgroundColor: '#f6efea',
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
            label={t('name')}
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
            label={t('email')}
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
            label={t('address_1')}
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
            label={t('phone')}
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
        </Box>
      </Box>
    </>
  );
};

export default Contact;
