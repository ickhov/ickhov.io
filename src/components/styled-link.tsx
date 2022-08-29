import { alpha, styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontFamily: "Montserrat, sans-serif",
  "&:hover": {
    background: alpha(
      theme.palette.secondary.main,
      theme.palette.mode === "light" ? 0.2 : 0.4
    ),
  },
  "&:active": {
    color:
      theme.palette.mode === "light"
        ? theme.palette.secondary.main
        : theme.palette.text.primary,
  },
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.primary,
}));

export default StyledLink;
