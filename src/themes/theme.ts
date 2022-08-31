import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // allow access using `useTheme`
  // eslint-disable-next-line no-unused-vars
  interface Theme {}
  // allow configuration using `createTheme`
  // eslint-disable-next-line no-unused-vars
  interface ThemeOptions {}
  // allow additional pallete options
  // eslint-disable-next-line no-unused-vars
  interface Palette {
    gradient: {
      top: string;
      bottom: string
    }
  }
  // allow additional pallete options
  // eslint-disable-next-line no-unused-vars
  interface PaletteOptions {
    gradient?: {
      top: string;
      bottom: string;
    };
  }
}

const defaultTheme: ThemeOptions = {
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
};

export default defaultTheme;
