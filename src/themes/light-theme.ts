import { ThemeOptions } from "@mui/material/styles";

const main = "#FDFBF6";
const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main
    },
    secondary: {
      main: "#8d42ef",
    },
    background: {
      paper: main,
      default: main,
    },
  },
};

export default lightTheme;
