import React from 'react';
import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const ClientNew = ({
  formData,
  setFormData,
}) => {
  const cities = [
    { municipality_id: 1, name: 'Arvika' },
    { municipality_id: 2, name: 'Eda' },
    { municipality_id: 3, name: 'Filipstad' },
    { municipality_id: 4, name: 'Forshaga' },
    { municipality_id: 5, name: 'Grums' },
    { municipality_id: 6, name: 'Hagfors' },
    { municipality_id: 7, name: 'Hammarö' },
    { municipality_id: 8, name: 'Karlstad' },
    { municipality_id: 9, name: 'Kil' },
    { municipality_id: 10, name: 'Kristinehamn' },
    { municipality_id: 11, name: 'Munkfors' },
    { municipality_id: 12, name: 'Storfors' },
    { municipality_id: 13, name: 'Sunne' },
    { municipality_id: 14, name: 'Säffle' },
    { municipality_id: 15, name: 'Torsby' },
    { municipality_id: 16, name: 'Årjäng' },
  ];

  const handleCityChange = (event) => {
    const selectedCity = cities.find(
      (city) => city.municipality_id === event.target.value
    );
    setFormData((prevData) => ({
      ...prevData,
      organizers: [
        {
          ...prevData.organizers[0],
          city: selectedCity ? selectedCity.name : '',
          municipality_id: selectedCity ? selectedCity.municipality_id : '',
        },
      ],
    }));
  };

  return (
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
      <Typography variant="h6" component="h2" gutterBottom>
        Är du ny arrangör eller företag?
      </Typography>
      <TextField
        variant="outlined"
        margin="dense"
        required
        fullWidth
        id="new-organizer-title"
        label="Title"
        name="title"
        value={formData.organizers[0]?.title || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            organizers: [
              {
                ...prevData.organizers[0],
                title: e.target.value,
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
        id="new-organizer-street1"
        label="Gatuadress 1"
        name="street1"
        value={formData.organizers[0]?.street1 || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            organizers: [
              {
                ...prevData.organizers[0],
                street1: e.target.value,
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
        id="new-organizer-street2"
        label="Gatuadress 2"
        name="street2"
        value={formData.organizers[0]?.street2 || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            organizers: [
              {
                ...prevData.organizers[0],
                street2: e.target.value,
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
        id="new-organizer-zipcode"
        label="Postnummer"
        name="zip_code"
        value={formData.organizers[0]?.zip_code || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            organizers: [
              {
                ...prevData.organizers[0],
                zip_code: e.target.value,
              },
            ],
          }))
        }
        className="text-field"
      />
      <FormControl variant="outlined" margin="dense" required fullWidth>
        <InputLabel id="organizer-city-label">Stad</InputLabel>
        <Select
          labelId="organizer-city-label"
          id="organizer-city"
          value={formData.organizers[0]?.municipality_id || 0}
          onChange={handleCityChange}
          label="Stad"
        >
          {cities.map((city) => (
            <MenuItem key={city.municipality_id} value={city.municipality_id}>
              {city.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="new-organizer-organization-id"
        label="Organisationsnummer int"
        name="organization_id"
        value={formData.organizers[0]?.organization_id || 0}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            organizers: [
              {
                ...prevData.organizers[0],
                organization_id: e.target.value,
              },
            ],
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="new-organizer-booking-link"
        label="Bokningslänk"
        name="booking_link"
        value={formData.organizers[0]?.booking_link || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            organizers: [
              {
                ...prevData.organizers[0],
                booking_link: e.target.value,
              },
            ],
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="new-organizer-website"
        label="Hemsida"
        name="website"
        value={formData.organizers[0]?.website || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            organizers: [
              {
                ...prevData.organizers[0],
                website: e.target.value,
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
        id="new-organizer-email"
        label="E-post"
        name="email"
        value={formData.organizers[0]?.email || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            organizers: [
              {
                ...prevData.organizers[0],
                email: e.target.value,
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
        id="new-organizer-phone-numbers"
        label="Telefonnummer"
        name="phone_numbers"
        value={formData.organizers[0]?.phone_numbers.join(', ') || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            organizers: [
              {
                ...prevData.organizers[0],
                phone_numbers: e.target.value.split(', '),
              },
            ],
          }))
        }
        className="text-field"
      />
    </Box>
  );
};

export default ClientNew;
