import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans, Noto Serif',
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#004337',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#004337',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'black',
          '&.Mui-focused': {
            color: '#004337',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#006761',
          '&.Mui-checked': {
            color: '#006761',
          },
          '&:hover': {
            backgroundColor: 'rgba(0, 67, 55, 0.08)',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#006761',
          '&.Mui-checked': {
            color: '#006761',
          },
        },
      },
    },
  },
});

export default theme;
