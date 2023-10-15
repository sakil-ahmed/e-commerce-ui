import {extendTheme, ThemeComponents} from "@chakra-ui/react";
import {ButtonStyle} from "@/common/theme/components/Button";
import {TextStyle} from "@/common/theme/components/Text";

const components = {
  Button: ButtonStyle,
  Text: TextStyle,
} as ThemeComponents

export const theme = extendTheme({
  colors: {
    primary: {
      100: "#d3edfc",
      200: "#a7dbf9",
      300: "#7bcaf6",
      400: "#4fb8f3",
      500: "#23a6f0",
      600: "#1c85c0",
      700: "#156490",
      800: "#0e4260",
      900: "#072130"
    },
    textColor: {
      50: "#737373",
      100: "#252B42"
    },
    bgColor: {
      50: "#202537",
      100: "#131726"
    }
  },
  fonts: {
    heading: 'montserrat, sans-serif',
    body: 'montserrat, sans-serif'
  },
  components,
})