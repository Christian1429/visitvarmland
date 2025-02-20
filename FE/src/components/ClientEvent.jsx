import { useState } from "react";
import {
  TextField,
  Box,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import HandleFileUpload from "./FileUpload";
import { useTranslation } from "react-i18next";
import InfoButton from "./buttons/InfoBtn";
import Field from "./Field";
const ClientEvent = ({ formData, setFormData }) => {
  // text limitations
  const sellingTextMaxLength = 100;
  const descriptionMaxLength = 200;
  const rmCharDescription = descriptionMaxLength - formData.description.length;
  const rmCharSelling = sellingTextMaxLength - formData.sales_text.length;

  const { t } = useTranslation();
  const [consent, setConsent] = useState(false);

  return (
    <Box
      sx={{
        maxWidth: 600,
        boxShadow: 3,
        p: 4,
        m: "auto",
        m: "auto",
        borderRadius: 2,
        backdropFilter: "blur(2px)",
        background: "rgba(255, 255, 255, 0.7)",
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(2px)",
        background: "rgba(255, 255, 255, 0.7)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        required
        variant="outlined"
        margin="dense"
        fullWidth
        id="title"
        label={t("event_name")}
        name="event-title"
        value={formData.title || ""}
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
        label={t("description")}
        name="description"
        value={formData.description || ""}
        value={formData.description || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            description: e.target.value,
          }))
        }
        className="text-field"
        multiline
        rows={3}
        slotProps={{ htmlInput: { maxLength: 200, minLength: 1 } }}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ alignSelf: "flex-end", mr: 1 }}
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
        label={t("sales_text")}
        name="event-sales-text"
        value={formData.sales_text || ""}
        value={formData.sales_text || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            sales_text: e.target.value,
          }))
        }
        className="text-field"
        multiline
        rows={6}
        slotProps={{ htmlInput: { maxLength: 400, minLength: 1 } }}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ alignSelf: "flex-end", mr: 1 }}
              sx={{ alignSelf: "flex-end", mr: 1 }}
            >
              {`${rmCharSelling}/${sellingTextMaxLength}`}
            </InputAdornment>
          ),
        }}
      />
      {/* <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-presentation"
        label={t("Presentation")}
        name="event-presentation"
        value={formData.presentation || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            presentation: e.target.value,
          }))
        }
        className="text-field"
      /> */}
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-ticket-information"
        label={t("ticket_information")}
        label={t("ticket_information")}
        name="event-ticket-information"
        value={formData.ticket_information || ""}
        value={formData.ticket_information || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            ticket_information: e.target.value,
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-open-times"
        label={t("open_times")}
        label={t("open_times")}
        name="event-open-times"
        value={formData.open_times || ""}
        value={formData.open_times || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            open_times: e.target.value,
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-booking-link"
        label={t("booking_link")}
        label={t("booking_link")}
        name="event-booking-link"
        value={formData.booking_link || ""}
        value={formData.booking_link || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            booking_link: e.target.value,
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="website"
        label={t("website")}
        name="event-website-link"
        value={formData.website_link || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            website_link: e.target.value,
          }))
        }
        className="text-field"
      />
      <Field />
      {/* --------------- IMAGE UPLOADER -------------- */}
      <HandleFileUpload formData={formData} setFormData={setFormData} />

      <Box gridColumn="span 2" sx={{ display: "flex" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              name="consent"
              color="primary"
              required
            />
          }
          label={t("gdpr")}
          label={t("gdpr")}
        />
        <InfoButton />
      </Box>
    </Box>
  );
};

export default ClientEvent;
