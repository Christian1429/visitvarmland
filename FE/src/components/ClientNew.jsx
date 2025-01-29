import { Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ClientNew = ({
  name,
  title,
  setTitle,
  street1,
  setStreet1,
  street2,
  setStreet2,
  zip_code,
  setZipCode,
  city,
  setCity,
  municipality_id,
  setMunicipalityId,
  organization_id,
  setOrganizationId,
  booking_link,
  setBookingLink,
  website,
  setWebsite,
  email,
  setEmail,
  phone_numbers,
  setPhoneNumbers,
  handleChange,
  handleArrayChange,
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
    setCity(selectedCity ? selectedCity.name : '');
    setMunicipalityId(selectedCity ? selectedCity.municipality_id : '');
  };

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
        Registera arrangör, företag eller organisation
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
          value={title || ''}
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="new-organizer-street1"
          label="Gatuadress 1"
          name="new-organizer-street1"
          vvalue={street1 || ''}
          onChange={(e) => setStreet1(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="new-organizer-street2"
          label="Gatuadress 2"
          name="new-organizer-street2"
          value={street2 || ''}
          onChange={(e) => setStreet2(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="new-organizer-zipcode"
          label="Postnummer"
          name="new-organizer-zipcode"
          value={zip_code || ''}
          onChange={(e) => setZipCode(e.target.value)}
          className="text-field"
        />
        <FormControl variant="outlined" margin="dense" required fullWidth>
          <InputLabel id="organizer-city-label">Stad</InputLabel>
          <Select
            labelId="organizer-city-label"
            id="organizer-city"
            value={municipality_id || 0}
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
        {/* <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="new-organizer-municipality-id"
          label="Kommun ID"
          name="new-organizer-municipality-id"
          value={newOrganizerMunicipalityId}
          onChange={(e) => setNewOrganizerMunicipalityId(e.target.value)}
          className="text-field"
        /> */}
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          id="new-organizer-organization-id"
          label="Organisationsnummer int"
          name="new-organizer-organization-id"
          value={organization_id || ''}
          onChange={(e) => setOrganizationId(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          id="new-organizer-booking-link"
          label="Bokningslänk"
          name="new-organizer-booking-link"
          value={booking_link || ''}
          onChange={(e) => setBookingLink(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          id="new-organizer-website"
          label="Hemsida"
          name="new-organizer-website"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="new-organizer-email"
          label="E-post"
          name="new-organizer-email"
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="new-organizer-phone-numbers"
          label="Telefonnummer"
          name="new-organizer-phone-numbers"
          value={phone_numbers.join(', ')}
          onChange={(e) => setPhoneNumbers(e.target.value.split(', '))}
          className="text-field"
        />
      </Box>
    </>
  );
};

export default ClientNew;
