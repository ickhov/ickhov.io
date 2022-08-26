import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  minHeight: '100vh',
  background: theme.palette.background.paper
}));

export default StyledLayout;