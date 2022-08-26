import { AlertColor } from "@mui/material/Alert";

export default interface StyledSnackbarInput {
  vertical?: "top" | "bottom";
  horizontal?: "left" | "center" | "right";
  severity?: AlertColor;
  open: boolean;
  message: string;
}
