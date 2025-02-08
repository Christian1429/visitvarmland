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
        input: {
          backgroundColor: '#ffffff',
          borderRadius: '8px',
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
          color: '#00a081',
          '&.Mui-checked': {
            color: '#006761',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          borderColor: '#004337',
          backgroundColor: '#00a081',
          '&:hover': {
            backgroundColor: '#004337',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: '8px',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#004337', // Hover border color
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#004337', // Focused border color
            },
            '&:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
              borderColor: '#b0b0b0', // Border color when not focused
            },
          },
          '& .MuiInputLabel-root': {
            color: '#333', // Label color when not focused
            '&.Mui-focused': {
              color: '#004337', // Focused label color
            },
          },
        },
      },
    },
  },
});

export default theme;
