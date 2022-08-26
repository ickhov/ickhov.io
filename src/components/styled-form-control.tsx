import { FormControl, FormControlProps } from "@mui/material";
import { styled } from "@mui/material/styles";

type StyledFormControlProps = FormControlProps & {
  hasValue?: boolean;
};

const StyledFormControl = styled((props: StyledFormControlProps) => {
  const { hasValue, ...rest } = props;
  return <FormControl {...rest} />;
})(({ error, hasValue = false, theme }) => {
  const borderColorNormal = error
    ? theme.palette.error.light
    : theme.palette.grey["400"];
  const borderColorActive = error
    ? theme.palette.error.light
    : theme.palette.primary.main;
  return {
    "& .MuiFilledInput-root": {
      border: `1px solid ${borderColorNormal}`,
      overflow: "hidden",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.default,
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        borderColor: borderColorActive,
      },
      "&.Mui-focused": {
        borderColor: borderColorActive,
        boxShadow: `${borderColorActive} 0 0 0 2px`,
      },
    },
    "& .MuiInputLabel-root": {
      ...(hasValue
        ? { color: theme.palette.text.primary, fontWeight: 700 }
        : { color: theme.palette.text.secondary, fontWeight: 400 }),
      "&.Mui-focused": {
        color: theme.palette.text.primary,
        fontWeight: 700,
      },
    },
  };
});

export default StyledFormControl;
