import { fonts } from "./variables";
export const lightTheme = {
  ...fonts,
  colors: {
    primary: "red",
    contourFill: "#8b0a20",
  },
  gradients: {
    background: `linear-gradient(180deg, #222323 0%, #151617 75%, #161414 100%)`,
  },
};

export const darkTheme = {
  ...fonts,
  colors: {
    primary: "#EE713C",
    secondary: "#EBE4E4",
    contourFill: "hsla(0, 0%, 100%, 0.04)",
  },
  gradients: {
    background: `linear-gradient(180deg, #222323 0%, #151617 75%, #161414 100%)`,
  },
};

interface Theme {
  light: { [key: string]: any };
  dark: { [key: string]: any };
}

const theme: Theme = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
