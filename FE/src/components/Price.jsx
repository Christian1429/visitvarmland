import { useContext } from "react";
import { FormDataContext } from "../context/FormDataContext";
import { Box, TextField } from "@mui/material";

function Price() {
  const { formData, setFormData } = useContext(FormDataContext);

  return (
    <Box sx={{ width: "100%", margin: "0 auto", padding: 2 }}>
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
      />
      <TextField
        label="Tillgängliga Platser"
        type="number"
        value={formData.prices[0].seats_available}
        onChange={(e) =>
          setFormData((prev) => {
            const newPrices = [...prev.prices];
            newPrices[0] = { ...newPrices[0], seats_available: e.target.value };
            return { ...prev, prices: newPrices };
          })
        }
      />
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
      />
    </Box>
  );
}

export default Price;
