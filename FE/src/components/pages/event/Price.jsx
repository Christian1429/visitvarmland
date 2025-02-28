import { useContext } from 'react';
import { FormDataContext } from '../../../context/FormDataContext';
import { Box, TextField, Typography, InputAdornment } from '@mui/material';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


function Price() {
  const { formData, setFormData } = useContext(FormDataContext);

  return (
    <>
      <Typography sx={{ textAlign: 'center', paddingTop: '1rem' }}>
          Priser och övrig information
      </Typography>
      <Box
        sx={{
          marginTop: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        <TextField
          label="Pristyp"
          value={formData.prices[0].price_type}
          onChange={(e) =>
            setFormData((prev) => {
              const newPrices = [...prev.prices];
              newPrices[0] = { ...newPrices[0], price_type: e.target.value };
              return { ...prev, prices: newPrices };
            })
          }
        />
        <TextField
          label="Pris"
          type="number"
          value={formData.prices[0].price}
          onChange={(e) =>
            setFormData((prev) => {
              const newPrices = [...prev.prices];
              newPrices[0] = { ...newPrices[0], price: e.target.value };
              return { ...prev, prices: newPrices };
            })
          }
          sx={{
            marginLeft: 1,
            marginRight: 1,
          }}
        />
        <TextField
          label="Tillgängliga Platser"
          type="number"
          value={formData.prices[0].seats_available}
          onChange={(e) =>
            setFormData((prev) => {
              const newPrices = [...prev.prices];
              newPrices[0] = {
                ...newPrices[0],
                seats_available: e.target.value,
              };
              return { ...prev, prices: newPrices };
            })
          }
        />
      </Box>
      <Box>
        <TextField
          label="Beskrivning"
          value={formData.prices[0].description}
          onChange={(e) =>
            setFormData((prev) => {
              const newPrices = [...prev.prices];
              newPrices[0] = { ...newPrices[0], description: e.target.value };
              return { ...prev, prices: newPrices };
            })
          }
          multiline
          rows={6}
          sx={{
            width: '100%',
            marginTop: 1,
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Här kan du ange priser på bland annat biljetter (exempelvis barn, vuxen, student, pensionär) och var man kan köpa dessa samt andra eventuella kostnader för besökare t.ex 'Kaffe 15 kr' " arrow>
                    <IconButton size="small">
                      <HelpOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </>
  );
}

export default Price;
