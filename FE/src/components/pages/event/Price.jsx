import { useContext } from "react";
import { FormDataContext } from "../../../context/FormDataContext";
import { Box, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Price() {
  const { formData, setFormData } = useContext(FormDataContext);
  const { t } = useTranslation();
  return (
    <>
      <Typography sx={{ textAlign: "center", paddingTop: "1rem" }}>
        {t("price_section_title")}
      </Typography>
      <Box
        sx={{
          marginTop: 1,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        <TextField
          label={t("price_type_label")}
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
          label={t("price_label")}
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
          label={t("seats_available_label")}
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
          rows={6}
          sx={{
            width: "100%",
            marginTop: 1,
          }}
        />
      </Box>
    </>
  );
}

export default Price;
