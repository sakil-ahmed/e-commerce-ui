import {ComponentStyleConfig} from "@chakra-ui/react";


export enum TextVariant {
  primary = "primary",

}

export const TextStyle = {
  variants: {
    [TextVariant.primary]: {
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '24px',
      letterSpacing: '0.2px'
    }
  },
  defaultProps: {
    variant: 'primary',
  }
} as ComponentStyleConfig;