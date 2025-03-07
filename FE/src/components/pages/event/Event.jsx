
import {
  TextField,
  Box,
  InputAdornment,

  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Event = ({ formData, setFormData }) => {
  
  const descriptionMaxLength = 5000;
  const rmCharDescription = descriptionMaxLength - formData.description.length;
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          width: { xs: '20rem', sm: '30rem', md: '37.5rem' },
          boxShadow: 3,
          p: 4,
          m: 'auto',
          borderRadius: 2,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(2px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{ textAlign: 'center', padding: 1, marginTop: '-1rem' }}
        >
          {t('event_title')}
        </Typography>
        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          id="title"
          label={t('event_name')}
          name="event-name"
          value={formData.title || ''}
          onChange={(e) =>
            setFormData((prevData) => ({ ...prevData, title: e.target.value }))
          }
          className="text-field"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title={
                      <Typography sx={{ fontSize: '1rem' }}>
                        {t('tooltips_eventname')}
                      </Typography>
                    }
                    arrow
                  >
                    <IconButton size="small">
                      <HelpOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          id="description"
          label={t('event_description')}
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
          rows={6}
          slotProps={{
            htmlInput: { maxLength: 200, minLength: 1 },
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ alignSelf: 'flex-end', mr: 1 }}
                >
                  {`${rmCharDescription}/${descriptionMaxLength}`}
                  <Tooltip
                    title={
                      <Typography sx={{ fontSize: '1rem' }}>
                        {t('tooltips_description')}
                      </Typography>
                    }
                    arrow
                  >
                    <IconButton size="small">
                      <HelpOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            },
          }}
        />
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
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title={
                      <Typography sx={{ fontSize: '1rem' }}>
                        {t('tooltips_ticketinformation')}
                      </Typography>
                    }
                    arrow
                  >
                    <IconButton size="small">
                      <HelpOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            },
          }}
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
        />{' '}
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          id="website"
          label={t('website')}
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
        <Box>
          <TextField
            variant="outlined"
            margin="dense"
            fullWidth
            id="other_info"
            label={t('other_info')}
            name="other_info"
            value={formData.other_info || ''}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                other_info: e.target.value,
              }))
            }
            className="text-field"
            multiline
            rows={4}
          />
        </Box>
        {/* --------------- IMAGE UPLOADER -------------- */}
      </Box>
    </>
  );
};

export default Event;
