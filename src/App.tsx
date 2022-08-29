import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import React from "react";
import "./App.css";
import { ColorModeProvider, useColorMode } from "./contexts/color-mode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkTheme, defaultTheme, lightTheme } from "./themes";
import Main, { Experience, Home } from "./pages";
import { CssBaseline } from "@mui/material";

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
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
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
