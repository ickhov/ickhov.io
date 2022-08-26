import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";
import type { StyledSnackbarInput } from "../@types";
import StyledAlert from "./styled-alert";

interface StyledSnackbarProps {
  data: StyledSnackbarInput;
  closeAlert: () => void;
}

export const StyledSnackbar = styled((props: StyledSnackbarProps) => {
  const { data, closeAlert } = props;
  const {
    vertical = "top",
    horizontal = "center",
    severity = "success",
    open,
    message,
  } = data;
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={6000}
      onClose={closeAlert}
      key={`${vertical}-${horizontal}-${message}`}
    >
      <StyledAlert
        onClose={closeAlert}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </StyledAlert>
    </Snackbar>
  );
})({});

export default StyledSnackbar;
