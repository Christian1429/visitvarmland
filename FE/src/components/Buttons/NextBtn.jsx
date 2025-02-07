import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BtnNext = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <Button onClick={onClick} sx={{ marginBottom: '2rem', width: '8rem' }}>
      {t('next_btn')}
    </Button>
  );
};

export default BtnNext;
