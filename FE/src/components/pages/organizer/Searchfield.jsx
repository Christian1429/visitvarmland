import { useContext, useEffect, useState } from 'react';
import { Autocomplete, TextField, Box } from '@mui/material';
import { FormDataContext } from '../../../context/FormDataContext';
import getForm from '../../../api/GetFrom';
import { useTranslation } from 'react-i18next';
import FormResetButton from '../../buttons/FormResetButton';

function Searchfield({ setEditable }) {
  const { formData, setFormData } = useContext(FormDataContext);
  const [organizers, setOrganizers] = useState([]);
  
  const { t } = useTranslation();
  

  useEffect(() => {
    const fetchOrganizers = async () => {
      try {
        const data = await getForm();
        const allOrganizers = data.flatMap((client) => client.organizers || []);
        setOrganizers(allOrganizers);
      } catch (error) {
        console.error('Fel vid hämtning av arrangörer:', error);
      }
    };

    fetchOrganizers();
  }, []);

  const handleSelect = (event, selectedOrganizer) => {
    if (selectedOrganizer) {
      setFormData((prevData) => ({
        ...prevData,
        organizers: [selectedOrganizer],
      }));
      setEditable(false);
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2} marginY={2}>
      <Autocomplete
        options={organizers}
        getOptionLabel={(option) => option.title || ''}
        onChange={handleSelect}
        renderOption={(props, option) => (
          <li {...props} key={option._id || option.title}>
            {option.title}
          </li>
        )}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label={t('Sök arrangör')} variant="outlined" />
        )}
      />
      <FormResetButton setFormData={setFormData} setEditable={setEditable} />
    </Box>
  );
}

export default Searchfield;
