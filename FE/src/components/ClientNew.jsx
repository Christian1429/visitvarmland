import { Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ClientNew = ({
  newOrganizerName,
  setNewOrganizerName,
  newOrganizerStreet1,
  setNewOrganizerStreet1,
  newOrganizerStreet2,
  setNewOrganizerStreet2,
  newOrganizerZipCode,
  setNewOrganizerZipCode,
  newOrganizerCity,
  setNewOrganizerCity,
  // newOrganizerMunicipalityId,
  setNewOrganizerMunicipalityId,
  newOrganizerOrganizationId,
  setNewOrganizerOrganizationId,
  newOrganizerBookingLink,
  setNewOrganizerBookingLink,
  newOrganizerWebsite,
  setNewOrganizerWebsite,
  newOrganizerEmail,
  setNewOrganizerEmail,
  newOrganizerPhoneNumbers,
  setNewOrganizerPhoneNumbers,
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
        (city) => city.name === event.target.value
      );
      setNewOrganizerCity(selectedCity.name);
      setNewOrganizerMunicipalityId(selectedCity.id);
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
          value={newOrganizerName}
          onChange={(e) => setNewOrganizerName(e.target.value)}
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
          value={newOrganizerStreet1}
          onChange={(e) => setNewOrganizerStreet1(e.target.value)}
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
          value={newOrganizerStreet2}
          onChange={(e) => setNewOrganizerStreet2(e.target.value)}
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
          value={newOrganizerZipCode}
          onChange={(e) => setNewOrganizerZipCode(e.target.value)}
          className="text-field"
        />
        <FormControl variant="outlined" margin="dense" required fullWidth>
          <InputLabel id="new-organizer-city-label">Stad</InputLabel>
          <Select
            labelId="new-organizer-city-label"
            id="new-organizer-city"
            value={newOrganizerCity}
            onChange={handleCityChange}
            label="Stad"
          >
            {cities.map((city) => (
              <MenuItem key={city.id} value={city.name}>
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
          label="Organisationsnummer"
          name="new-organizer-organization-id"
          value={newOrganizerOrganizationId}
          onChange={(e) => setNewOrganizerOrganizationId(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          id="new-organizer-booking-link"
          label="Bokningslänk"
          name="new-organizer-booking-link"
          value={newOrganizerBookingLink}
          onChange={(e) => setNewOrganizerBookingLink(e.target.value)}
          className="text-field"
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          id="new-organizer-website"
          label="Hemsida"
          name="new-organizer-website"
          value={newOrganizerWebsite}
          onChange={(e) => setNewOrganizerWebsite(e.target.value)}
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
          value={newOrganizerEmail}
          onChange={(e) => setNewOrganizerEmail(e.target.value)}
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
          value={newOrganizerPhoneNumbers.join(', ')}
          onChange={(e) =>
            setNewOrganizerPhoneNumbers(e.target.value.split(', '))
          }
          className="text-field"
        />
      </Box>
    </>
  );
};

export default ClientNew;
