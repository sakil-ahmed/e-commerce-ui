import {ComponentStyleConfig} from "@chakra-ui/react";

export enum ButtonVariant {
  primary = 'primary',
  unstyled = 'unstyled'
}

export const ButtonStyle = {
  variants: {
    [ButtonVariant.primary]: {
      bg: "primary.500",
      borderRadius: '5px',
      color: "white",
      px: '40px',
      py: '15px',
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: "22px",
      letterSpacing: "0.2px",
      _hover: {
        bg: 'primary.600'
      }
    },
    [ButtonVariant.unstyled]: {
      bg: 'transparent',
      p: "0",
      border: "none",
      outline: "none",
      minW: 'fit-content',
      h: "auto",
    }
  },
  defaultProps: {
    size: 'lg',
    variant: 'primary',
  }
} as ComponentStyleConfig;