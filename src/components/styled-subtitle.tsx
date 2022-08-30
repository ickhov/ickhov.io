import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

const StyledSubtitle = styled((props: TypographyProps) => (
  <Typography gutterBottom variant="h6" {...props} />
))({ fontWeight: 700 });

export default StyledSubtitle;
