import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledHeader = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  padding: theme.spacing(3, 3, 0),
  justifyContent: "space-between",
  boxSizing: 'border-box'
}));

export default StyledHeader;
