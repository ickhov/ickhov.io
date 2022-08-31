import { ThemeOptions } from "@mui/material/styles";

const main = "#FDFBF6";
const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main,
    },
    secondary: {
      main: "#8d42ef",
    },
    background: {
      paper: main,
      default: main,
    },
    gradient: {
      top: "#F6F0EA",
      bottom: "#F9D29D",
    },
  },
};

export default lightTheme;
