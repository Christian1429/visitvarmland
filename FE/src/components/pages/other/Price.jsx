
import { useContext } from 'react';
import { FormDataContext } from '../../../context/FormDataContext';
import { Box, TextField, InputAdornment } from '@mui/material';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useTranslation } from "react-i18next";

function Price() {
  const { formData, setFormData } = useContext(FormDataContext);
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          marginTop: 1,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
      </Box>
      <Box>
        <TextField
          label={t("price_description_label")}
          value={formData.prices[0].description}
          onChange={(e) =>
            setFormData((prev) => {
              const newPrices = [...prev.prices];
              newPrices[0] = { ...newPrices[0], description: e.target.value };
              return { ...prev, prices: newPrices };
            })
          }
          multiline
          rows={3}
          sx={{
            width: "100%",
            marginTop: 1,
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title={t("tooltips_pricedescription")} arrow>
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
