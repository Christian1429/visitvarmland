import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import getForm from '../api/GetFrom';

const ClientExist = ({ handleClientSelect}) => {
  const [clients, setClients] = useState([]);
  const [dropdownValueExisting, setDropdownValueExisting] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getForm();
      setClients(data);
    };

    fetchClients();
  }, []);

  const handleChange = (event) => {
    const selectedClient = clients.find(
      (client) => client.id === event.target.value
    );
    setDropdownValueExisting(event.target.value);
    handleClientSelect(selectedClient);
  };

  return (
    <FormControl fullWidth margin="normal" sx={{ width: '15rem' }}>
      <InputLabel id="dropdown-label-existing">Redan registrerad?</InputLabel>
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
