
import { useState } from 'react';
import {
  TextField,
  Box,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import HandleFileUpload from './ImgUpload';
import { useTranslation } from 'react-i18next';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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
          m: 'auto',
          borderRadius: 2,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(2px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{ textAlign: 'center', padding: 0, marginTop: '-1rem' }}
        >
          Fyll i all nödvändig information om ditt evenemang
        </Typography>
        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          id="title"
          label={t('event_name')}
          name="event-title"
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
                    title="Skriv en passande, slagkraftig titel på ditt evenemang eller tips så att det blir lätt att känna igen."
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
          label={t('description')}
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
                    title="Här beskriver du evenemanget så detaljerat och säljande som möjligt – ju mer information, desto bättre för besökarna! Eventuell längd på föreställning eller pauser.
Tillgänglighetsinformation – exempelvis rullstolsanpassning eller hörslinga.
Eventuella åldersrekommendationer.
Övrigt: Finns det något annat viktigt som besökarna behöver känna till?"
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
          id="sales_text"
          label={t('sales_text')}
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
          rows={4}
          inputProps={{ maxLength: 100, minLength: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{ alignSelf: 'flex-end', mr: 1 }}
              >
                {`${rmCharSelling}/${sellingTextMaxLength}`}
                <Tooltip
                  title="En kort, säljande text för att locka besökare"
                  arrow
                >
                  <IconButton size="small">
                    <HelpOutlineIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
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
                    title=" Behöver biljett förköpas, betalas entré i dörren, ev. återförsäljare av biljetter, olika pristyper etc"
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
        />{' '}
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
        <HandleFileUpload formData={formData} setFormData={setFormData} />
      </Box>
    </>
  );
};

export default Event;
