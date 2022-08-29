import { alpha, styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontFamily: "Montserrat, sans-serif",
  "&:hover": {
    background: alpha(theme.palette.secondary.main, 0.1),
  },
  "&:active": {
    color: theme.palette.secondary.main,
  },
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
}));

export default StyledLink;
