import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NextBtn = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <Button onClick={onClick} sx={{ marginBottom: '2rem', width: '8rem' }}>
      {t('next_btn')}
    </Button>
  );
};

export default NextBtn;
