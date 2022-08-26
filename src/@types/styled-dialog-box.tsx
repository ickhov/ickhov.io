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

export const DIALOG_BOX_SIZE_SMALL = "sm";
export const DIALOG_BOX_SIZE_MEDIUM = "md";
export const DIALOG_BOX_SIZE_LARGE = "lg";
export const DIALOG_BOX_SIZE_XLARGE = "xl";
