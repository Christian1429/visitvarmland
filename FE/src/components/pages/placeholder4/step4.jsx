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
        <Places />
        <Price />
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
            rows={5}
          />
        </Box>
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
