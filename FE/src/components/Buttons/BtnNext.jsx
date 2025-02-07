import { Button } from '@mui/material';

const BtnNext = ({ onClick }) => {
  return (
    <Button onClick={onClick} sx={{ marginBottom: '2rem', width: '8rem' }}>
      Nästa
    </Button>
  );
};

export default BtnNext;
