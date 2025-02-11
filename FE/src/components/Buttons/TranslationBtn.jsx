import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language'; // Globe icon

function TranslationBtn() {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null); // For the Menu component

  // Open Menu on clicking Globe Icon
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Change Language
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setAnchorEl(null); // Close the menu after selecting a language
  };

  return (
    <div style={{ position: 'absolute', top: '10px', right: '50px' }}>
      {/* Globe Icon for Language Selector */}
      <IconButton onClick={handleMenuClick} color="primary">
        <LanguageIcon />
      </IconButton>

      {/* Language selection menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleLanguageChange('en')}>
          {t('language_btn_en')}
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('sv')}>
          {t('language_btn_swe')}
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('de')}>
          {t('language_btn_de')}
        </MenuItem>
      </Menu>
    </div>
  );
}

export default TranslationBtn;
