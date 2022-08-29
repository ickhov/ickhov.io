import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledDialogProps } from "../@types";
import StyledButton from "./styled-button";

const StyledDialogBox = (props: StyledDialogProps) => {
  const theme = useTheme();
  const {
    children,
    open,
    maxWidth = "sm",
    title,
    message,
    leftButtonTitle,
    rightbuttonTitle,
    handleLeftButtonClick,
    handleRightButtonClick,
    topDialogContent,
    bottomDialogContent,
  } = props;

  return (
    <Dialog
      fullWidth
      maxWidth={maxWidth}
      onClose={handleLeftButtonClick}
      aria-labelledby="Reusable dialog Box"
      open={open}
      sx={{
        "& .MuiPaper-root": {
          margin: 0,
          padding: theme.spacing(1),
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold" }}>{title || "Title"}</DialogTitle>
      {topDialogContent && (
        <DialogContent style={{ overflow: "visible" }}>
          {topDialogContent}
        </DialogContent>
      )}
      <DialogContent>
        {children || (
          <DialogContentText sx={{ color: theme.palette.text.primary }}>
            {message || "Message"}
          </DialogContentText>
        )}
      </DialogContent>
      {bottomDialogContent && (
        <DialogContent style={{ overflow: "visible" }}>
          {bottomDialogContent}
        </DialogContent>
      )}
      <DialogActions
        sx={{
          "& > *": {
            padding: theme.spacing(1.5, 2),
          },
          "& #left": {
            backgroundColor: theme.palette.error.main,
            padding: theme.spacing(1.5, 2),
            "&:hover": {
              backgroundColor: theme.palette.error.dark,
            },
          },
          "& #right": {
            backgroundColor: theme.palette.success.main,
            padding: theme.spacing(1.5, 2),
            "&:hover": {
              backgroundColor: theme.palette.success.dark,
            },
          },
        }}
      >
        {handleLeftButtonClick && (
          <StyledButton id="left" onClick={handleLeftButtonClick}>
            {leftButtonTitle || "Cancel"}
          </StyledButton>
        )}
        {handleRightButtonClick && (
          <StyledButton id="right" onClick={handleRightButtonClick}>
            {rightbuttonTitle || "Submit"}
          </StyledButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default StyledDialogBox;
