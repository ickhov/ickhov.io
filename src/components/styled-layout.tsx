import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledLayout = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  width: "1200px",
  maxWidth: "100%",
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  flex: "1 0",
}));

export default StyledLayout;
