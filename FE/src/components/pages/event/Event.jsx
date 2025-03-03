import { TextField, Box, InputAdornment, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Event = ({ formData, setFormData }) => {
  const sellingTextMaxLength = 100;
  const descriptionMaxLength = 200;
  const rmCharDescription = descriptionMaxLength - formData.description.length;
  const rmCharSelling = sellingTextMaxLength - formData.sales_text.length;

  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          maxWidth: 600,
          boxShadow: 3,
          p: 4,
          m: "auto",
          borderRadius: 2,
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(2px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ textAlign: "center", padding: 0, marginTop: "-1rem" }}
        >
          Fyll i all nödvändig information om ditt evenemang
        </Typography>

        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          id="title"
          label={t("event_name")}
          name="event-title"
          value={formData.title || ""}
          onChange={(e) =>
            setFormData((prevData) => ({ ...prevData, title: e.target.value }))
          }
          className="text-field"
        />

        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          id="description"
          label={t("description")}
          name="description"
          value={formData.description || ""}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              description: e.target.value,
            }))
          }
          className="text-field"
          multiline
          rows={6}
          inputProps={{ maxLength: 200, minLength: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{ alignSelf: "flex-end", mr: 1 }}
              >
                {`${rmCharDescription}/${descriptionMaxLength}`}
              </InputAdornment>
            ),
          }}
        />

        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          id="sales_text"
          label={t("sales_text")}
          name="event-sales-text"
          value={formData.sales_text || ""}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              sales_text: e.target.value,
            }))
          }
          className="text-field"
          multiline
          rows={4}
          inputProps={{ maxLength: 100, minLength: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{ alignSelf: "flex-end", mr: 1 }}
              >
                {`${rmCharSelling}/${sellingTextMaxLength}`}
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default Event;
