import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const ClientEvent = ({
  title,
  setTitle,
  description,
  setDescription,
  sales_text,
  setSalesText,
  presentation,
  setPresentation,
  open_hours,
  setOpenHours,
  ticket_information,
  setTicketInformation,
  ticket_info,
  setTicketInfo,
  open_times,
  setOpenTimes,
  meta_title,
  setMetaTitle,
  meta_keywords,
  setMetaKeywords,
  meta_description,
  setMetaDescription,
  booking_link,
  setBookingLink,
  website_link,
  setWebsiteLink,
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
      <Typography variant="h6" component="h2" gutterBottom>
        Fyll i ditt event
      </Typography>
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-title"
        label="Event titel"
        name="event-title"
        value={title || ''}
        onChange={(e) => setTitle(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-description"
        label="Beskrivning av ditt event"
        name="event-description"
        value={description || ''}
        onChange={(e) => setDescription(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-sales-text"
        label="Säljande text"
        name="event-sales-text"
        value={sales_text || ''}
        onChange={(e) => setSalesText(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-presentation"
        label="Presentation"
        name="Event presenation"
        value={presentation || ''}
        onChange={(e) => setPresentation(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-open-hours"
        label="Öppettider timmar"
        name="event-open-hours"
        value={open_hours || ''}
        onChange={(e) => setOpenHours(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-ticket-information"
        label="Ticket Information"
        name="Biljett information"
        value={ticket_information || ''}
        onChange={(e) => setTicketInformation(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-ticket-info"
        label="Biljett info"
        name="event-ticket-info"
        value={ticket_info || ''}
        onChange={(e) => setTicketInfo(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-open-times"
        label="Öppettider"
        name="event-open-times"
        value={open_times || ''}
        onChange={(e) => setOpenTimes(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-meta-title"
        label="Meta Title"
        name="event-meta-title"
        value={meta_title || ''}
        onChange={(e) => setMetaTitle(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-meta-keywords"
        label="Meta Keywords"
        name="event-meta-keywords"
        value={meta_keywords || ''}
        onChange={(e) => setMetaKeywords(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-meta-description"
        label="Meta Beskrivning"
        name="event-meta-description"
        value={meta_description || ''}
        onChange={(e) => setMetaDescription(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-booking-link"
        label="Bokningslänk"
        name="event-booking-link"
        value={booking_link || 'a'}
        onChange={(e) => setBookingLink(e.target.value)}
        className="text-field"
      />
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        id="event-website-link"
        label="Hemsida länk"
        name="event-website-link"
        value={website_link || ''}
        onChange={(e) => setWebsiteLink(e.target.value)}
        className="text-field"
      />
    </Box>
  );
};

export default ClientEvent;
