import { PaletteMode } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import React from "react";
import "./App.css";
import { ColorModeProvider, useColorMode } from "./contexts/color-mode";
import { Home } from "./pages";
import { defaultTheme } from "./themes";

function AppWithColorMode() {
  const { mode } = useColorMode();
  const themeWithColorMode = React.useMemo(
    () =>
      createTheme(defaultTheme, {
        palette: {
          mode: mode as PaletteMode,
        },
      }),
    [mode]
  );

  // update background color when theme changes
  React.useEffect(() => {
    document.body.style.backgroundColor =
      themeWithColorMode.palette.background.default;
  }, [themeWithColorMode]);

  return (
    <ThemeProvider theme={themeWithColorMode}>
      <Home />
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
