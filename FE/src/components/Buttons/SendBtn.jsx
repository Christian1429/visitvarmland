import { Button } from '@mui/material';


// Deras gula knapp
const SendBtn = () => {
  return (
    <Button
      sx={{
        backgroundColor: 'var(--color-site-yellow)',
        borderRadius: '0px',
        fontSize: '14px',
        color: 'black',
        width: '8rem',
        fontWeight: '600',
        boxShadow: '6px 6px 0px rgba(236, 198, 82, 0.3)',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
      type="submit"
      fullWidth
      variant="contained"
      className="btn-submit"
    >
      Skicka
    </Button >
  );
}

export default SendBtn

