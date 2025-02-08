import { IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function InfoButton() {
  const handleRedirect = () => {
    
    window.open(
      'https://www.regionvarmland.se/regionvarmland/om-regionen/personuppgiftsbehandling',
      '_blank'
    );
  };

  return (
    <IconButton onClick={handleRedirect} color="primary">
      <InfoIcon />
    </IconButton>
  );
}

export default InfoButton;
