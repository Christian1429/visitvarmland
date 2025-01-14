import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CloseBtn = ({ redirectUrl }) => {
  const handleClick = () => {
    window.location.href = redirectUrl;
  };

  return (
    <IconButton
      onClick={handleClick}
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
