import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ColorModeProvider, useColorMode } from "./contexts/color-mode";
import Main, { Experience, Home } from "./pages";
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
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<Home />} />
            <Route path="experience" element={<Experience />} />
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
