import React from 'react';
import { TextField, Box } from '@mui/material';
import DatePickerClient from '../components/DatePicker';
const ClientEvent = ({
  formData,
  setFormData,
}) => {
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
      <DatePickerClient />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-title"
        label="Title"
        name="event-title"
        value={formData.title || ''}
        onChange={(e) =>
          setFormData((prevData) => ({ ...prevData, title: e.target.value }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-description"
        label="Description"
        name="event-description"
        value={formData.description || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            description: e.target.value,
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-sales-text"
        label="Sales Text"
        name="event-sales-text"
        value={formData.sales_text || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            sales_text: e.target.value,
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-presentation"
        label="Presentation"
        name="event-presentation"
        value={formData.presentation || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            presentation: e.target.value,
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-open-hours"
        label="Open Hours"
        name="event-open-hours"
        value={formData.open_hours || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            open_hours: e.target.value,
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-ticket-information"
        label="Ticket Information"
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
        id="event-ticket-info"
        label="Biljett info"
        name="event-ticket-info"
        value={formData.ticket_info || ''}
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
        label="Öppettider"
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
        id="event-meta-title"
        label="Meta Title"
        name="event-meta-title"
        value={formData.meta_title || ''}
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
        value={formData.meta_keywords || ''}
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
        value={formData.meta_description || ''}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            meta_description: e.target.value,
          }))
        }
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-booking-link"
        label="Booking Link"
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
        label="Website Link"
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
    </Box>
  );
};

export default ClientEvent;
