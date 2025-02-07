import React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import DatePickerClient from "../components/DatePicker";
import HandleFileUpload from "../components/fileUpload";
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
        width: "100%",
        maxWidth: 600,
        boxShadow: 3,
        p: 4,
        m: "auto",
        backdropFilter: "blur(2px)",
      }}
    >
      <TextField
        required
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-title"
        label={t("title")}
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
        id="event-description"
        label={t("Description")}
        name="event-description"
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
        id="event-sales-text"
        label={t("SellingText")}
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
      {/* <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-open-hours"
        label="Open Hours" //Open Hours och Öppet tider där nere vad är skillnaden?
        name="event-open-hours"
        value={formData.open_hours || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            open_hours: e.target.value,
          }))
        }
        className="text-field"
      /> */}
      {/* <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-ticket-information"
        label="Ticket Information"
        name="event-ticket-information"
        value={formData.ticket_information || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            ticket_information: e.target.value,
          }))
        } 
        className="text-field"
      /> */}
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-ticket-info"
        label={t("BiljetInformation")}
        name="event-ticket-info"
        value={formData.ticket_info || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            ticket_info: e.target.value,
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-open-times"
        label={t("Open_Hours")}
        name="event-open-times"
        value={formData.open_times || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            open_times: e.target.value,
          }))
        }
        className="text-field"
      />

      {/*! Maybe copy title, description, sales_text into sales_text,meta_title, meta_keywords, meta_description */}

      {/* <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-meta-title"
        label="Meta Title"
        name="event-meta-title"
        value={formData.meta_title || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            meta_title: e.target.value,
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-meta-keywords"
        label="Meta Keywords"
        name="event-meta-keywords"
        value={formData.meta_keywords || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            meta_keywords: e.target.value,
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-meta-description"
        label="Meta Description"
        name="event-meta-description"
        value={formData.meta_description || ""}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            meta_description: e.target.value,
          }))
        }
        className="text-field"
      /> */}
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-booking-link"
        label="Bookningslänk"
        name="event-booking-link"
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
        id="event-website-link"
        label="Hemsida"
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

      <HandleFileUpload />
    </Box>
  );
};

export default ClientEvent;
