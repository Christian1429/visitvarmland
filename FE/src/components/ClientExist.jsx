import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import getForm from '../api/GetFrom';

const ClientExist = ({ setFormData }) => {
  const [clients, setClients] = useState([]);
  const [dropdownValueExisting, setDropdownValueExisting] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getForm();
      console.log('Fetched clients:', data);
      setClients(data);
    };

    fetchClients();
  }, []);

    const handleClientSelect = (client) => {
      const organizers = client.organizers[0];
      if (organizers) {
        setFormData((prevData) => ({
          ...prevData,
          organizers: [
            {
              id: organizers.id || 0,
              name: organizers.title || '',
              street1: organizers.street1 || '',
              street2: organizers.street2 || '',
              zip_code: organizers.zip_code || '',
              city: organizers.city || '',
              municipality_id: organizers.municipality_id || '',
              organization_id: organizers.organization_id || '',
              booking_link: organizers.booking_link || '',
              website: organizers.website_link || '',
              email: organizers.email || '',
              phone_numbers: organizers.phone_numbers || [],
            },
          ],
        }));
      }
    };

  const handleChange = (event) => {
    const selectedClient = clients.find(
      (client) => client.id === event.target.value
    );
    console.log('Selected client:', selectedClient);
    setDropdownValueExisting(event.target.value);
    handleClientSelect(selectedClient);
  };

  return (
    <FormControl fullWidth margin="normal" sx={{ width: '15rem' }}>
      <InputLabel id="dropdown-label-existing">
        Redan registrerad?
      </InputLabel>
      <Select
        labelId="dropdown-label-existing"
        id="dropdown-existing"
        value={dropdownValueExisting}
        onChange={handleChange}
        label="Redan registrerad?"
      >
        {clients.map((client) => (
          <MenuItem key={client.id} value={client.id}>
            {client.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ClientExist;
