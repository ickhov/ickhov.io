import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100vw",
  padding: "16px 23%",
  [theme.breakpoints.down("xl")]: {
    padding: "16px 20%",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "16px 10%",
  },
}));

export default StyledBox;
