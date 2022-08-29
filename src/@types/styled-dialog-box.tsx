import { DialogProps } from "@mui/material";
import React from "react";

export interface StyledDialogProps
  extends React.PropsWithChildren<DialogProps> {
  title?: string;
  message?: string;
  leftButtonTitle?: string;
  rightbuttonTitle?: string;
  handleLeftButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  handleRightButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoadingLeftButton?: boolean;
  isLoadingRightButton?: boolean;
  topDialogContent?: React.ReactNode;
  bottomDialogContent?: React.ReactNode;
}

export enum DIALOG_BOX_SIZE {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
  XLARGE = "xl",
}
