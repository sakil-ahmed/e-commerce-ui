import {ComponentStyleConfig} from "@chakra-ui/react";

export enum ButtonVariant {
  primary = 'primary',
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
      _hover:{
        bg:'primary.600'
      }
    }
  },
  defaultProps: {
    size: 'lg',
    variant: 'primary',
  }
} as ComponentStyleConfig;