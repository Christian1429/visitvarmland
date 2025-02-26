
import { IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const InfoButton = () => {
  return (
    <IconButton
      onClick={() =>
        window.open(
          'https://www.regionvarmland.se/regionvarmland/om-regionen/personuppgiftsbehandling',
          '_blank'
        )
      }
    >
      <InfoIcon />
    </IconButton>
  );
};

export default InfoButton;
