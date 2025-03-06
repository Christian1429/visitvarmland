import { useState, useContext } from "react";
import { TextField, Box, Checkbox, FormControlLabel } from "@mui/material";
import { useTranslation } from "react-i18next";
import InfoButton from "../../buttons/InfoBtn";
import Places from "../event/Places";
import Price from "../event/Price";
import HandleFileUpload from "../event/ImgUpload";
import { FormDataContext } from "../../../context/FormDataContext";

function Step4() {
  const { t } = useTranslation();
  const [consent, setConsent] = useState(false);
  const { formData, setFormData } = useContext(FormDataContext);

  const handleChange = (e) => {
    setConsent(e);
    setFormData((prev) => ({
      ...prev,
      gdpr_consent: e,
    }));
  };

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

        <Places />
        <Price />
        <HandleFileUpload formData={formData} setFormData={setFormData} />

        <Box gridColumn="span 2" sx={{ display: 'flex', paddingTop: '2rem' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={consent}
                onChange={(e) => handleChange(e.target.checked)}
                name="consent"
                required
              />
            }
            label={t('gdpr')}
          />
          <InfoButton />
        </Box>
      </Box>
    </>
  );
}

export default Step4;
