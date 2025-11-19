import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
      contrastText: '#F8FAFC',
    },
    secondary: {
      main: '#F8FAFC',
      contrastText: '#000000',
    },
    tertiary: {
      main: '#7C3AED',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#000000',
      paper: '#0A0A0A',
    },
    text: {
      primary: '#F8FAFC',
      secondary: 'rgba(248, 250, 252, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 32px',
          fontSize: '1rem',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
        },
      },
    },
  },
});