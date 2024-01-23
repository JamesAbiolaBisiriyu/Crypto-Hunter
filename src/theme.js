// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#121212',
    },
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

export default theme;