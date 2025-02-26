import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CloseBtn = () => {

  return (
    <IconButton
      onClick={() => (window.location.href = 'https://www.visitvarmland.com')}
      sx={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <CloseIcon sx={{ color: 'black' }} />
    </IconButton>
  );
};

export default CloseBtn;
