import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // Resto de la configuración del tema...
});

export default theme;
