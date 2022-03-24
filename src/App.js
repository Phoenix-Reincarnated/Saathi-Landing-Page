import theme from "./theme";
import { CssBaseline } from "@mui/material";
import RouteComponent from "./Routes.js";
import { ThemeProvider } from "@mui/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteComponent />
    </ThemeProvider>
  );
}

export default App;
