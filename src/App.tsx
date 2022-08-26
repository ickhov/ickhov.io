import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import React from "react";
import "./App.css";
import { ColorModeProvider, useColorMode } from "./contexts/color-mode";
import Main from "./pages";
import { darkTheme, defaultTheme, lightTheme } from "./themes";

function AppWithColorMode() {
  const { mode } = useColorMode();
  const theme = React.useMemo(
    () =>
      createTheme({
        ...defaultTheme,
        ...(mode === "light" ? lightTheme : darkTheme),
      }),
    [mode]
  );

  // update background color when theme changes
  React.useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

const App = () => (
  <StyledEngineProvider injectFirst>
    <ColorModeProvider>
      <AppWithColorMode />
    </ColorModeProvider>
  </StyledEngineProvider>
);

export default App;
