import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5045FF",
      secondary: "#4D7178",
    },
    secondary: {
      main: "#fffafa",
    },
  },
});

export default responsiveFontSizes(theme);
