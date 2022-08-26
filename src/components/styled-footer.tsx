import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledFooter = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  padding: theme.spacing(0, 3, 3),
  justifyContent: "space-between",
  boxSizing: 'border-box'
}));

export default StyledFooter;
