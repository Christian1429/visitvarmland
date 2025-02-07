import React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import DatePickerClient from "../components/DatePicker";
import HandleFileUpload from "../components/FileUpload";
import { useTranslation } from "react-i18next";
const ClientEvent = ({ formData, setFormData }) => {
  const sellingTextMaxLength = 100;
  const descriptionMaxLength = 200;
  const rmCharDescription = descriptionMaxLength - formData.description.length;
  const rmCharSelling = sellingTextMaxLength - formData.sales_text.length;
  const { t } = useTranslation();
  return (
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
      <TextField
        required
        variant="outlined"
        margin="dense"
        fullWidth
        id="title"
        label={t('title')}
        name="event-title"
        value={formData.title || ''}
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
        id={t('description')}
        label="Description"
        name="description"
        value={formData.description || ''}
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
              sx={{ alignSelf: 'flex-end', mr: 1 }}
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
        id="selling_text"
        label={t(selling_text)}
        name="event-sales-text"
        value={formData.sales_text || ''}
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
              sx={{ alignSelf: 'flex-end', mr: 1 }}
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
        label={t('ticket_information')}
        name="event-ticket-information"
        value={formData.ticket_information || ''}
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
        label={t('open_times')}
        name="event-open-times"
        value={formData.open_times || ''}
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
        label={t('booking_link')}
        name="event-booking-link"
        value={formData.booking_link || ''}
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
        id="event-website-link"
        label="Hemsida"
        name="event-website-link"
        value={formData.website_link || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            website_link: e.target.value,
          }))
        }
        className="text-field"
      />

      <HandleFileUpload />
    </Box>
  );
};

export default ClientEvent;
