import { ThemeProvider } from "@mui/material";
import Routes from "./Routes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
