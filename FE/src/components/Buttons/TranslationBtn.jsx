import { useTranslation } from "react-i18next";
import { Button, Box } from '@mui/material';

function TranslationBtn() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          right: '50px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <Button
          onClick={() => i18n.changeLanguage('en')}
          sx={{ marginRight: '0.2rem' }}
        >
          {t('language_btn_en')}
        </Button>
        <Button
          onClick={() => i18n.changeLanguage('sv')}
          sx={{ marginRight: '0.2rem' }}
        >
          {t('language_btn_swe')}
        </Button>
        <Button
          onClick={() => i18n.changeLanguage('de')}
          sx={{ marginRight: '0.2rem' }}
        >
          {t('language_btn_de')}
        </Button>
      </Box>
    </>
  );
}

export default TranslationBtn;
