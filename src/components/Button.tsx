// src/components/Button.tsx
import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

type MuiButtonColor = MuiButtonProps["color"];

interface ButtonProps extends Omit<MuiButtonProps, "color"> {
  color?: MuiButtonColor;
  customColor?: string;
  rounded?: boolean;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "customColor" && prop !== "rounded",
})<{ customColor?: string; rounded?: boolean }>(
  ({ theme, customColor, rounded }) => ({
    borderRadius: rounded ? "50px" : "4px",
    textTransform: "none",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      boxShadow: theme.shadows[4],
      transform: "translateY(-2px)",
    },
    ...(customColor && {
      backgroundColor: customColor,
      color: theme.palette.getContrastText(customColor),
      "&:hover": {
        backgroundColor: theme.palette.augmentColor({
          color: { main: customColor },
        }).dark,
      },
    }),
  })
);

const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  customColor,
  rounded = false,
  fullWidth = false,
  sx,
  ...props
}) => {
  return (
    <StyledButton
      color={customColor ? undefined : color}
      customColor={customColor}
      rounded={rounded}
      fullWidth={fullWidth}
      sx={sx}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
