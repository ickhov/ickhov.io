import { alpha, styled } from "@mui/material/styles";

const StyledAnchor = styled("a")(({ theme }) => ({
  textDecoration: "none",
  fontFamily: "Montserrat, sans-serif",
  "&:hover": {
    background: alpha(theme.palette.secondary.main, 0.2),
  },
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  color:
    theme.palette.mode === "light"
      ? theme.palette.secondary.main
      : theme.palette.secondary.light,
}));

export default StyledAnchor;
