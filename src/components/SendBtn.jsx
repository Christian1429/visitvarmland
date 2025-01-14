import React from 'react'
import { Button } from '@mui/material';

const SendBtn = () => {
  return (
    <Button
  sx={{
    backgroundColor: 'var(--color-site-yellow)',
    borderRadius: '0px',
    color: 'black',
    boxShadow: '8px 8px 0px rgba(236, 198, 82, 0.5)',
  }}
  type="submit"
  fullWidth
  variant="contained"
  className="btn-submit"
>
  Skicka
</Button>

  )
}

export default SendBtn

