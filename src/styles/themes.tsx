import variables from "./variables";
import { DefaultTheme } from "styled-components";

export type Theme = {
  colors: {
    background: string;
    borderMain: string;
    borderOuter: string;
    borderInner: string;
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    icon: string;
  };
  gradients: {
    homeContainer: string;
  };
};

export interface Themes {
  light: Theme;
  dark: Theme;
}

export const lightTheme: Theme = {
  ...variables,
  colors: {
    background: "#EDF3F6",
    borderMain: "#494C5A",
    borderOuter: "#B4C7D0",
    borderInner: "#03040D",
    primary: "#2F2F34",
    secondary: "#E54732",
    accent: "#FFFFFF",
    text: "#2F2F34",
    icon: "#E54732",
  },
  gradients: {
    homeContainer:
      "linear-gradient(180deg, #C5E8F7 0%, #BCC2E1 60.24%, #FACEC8 100%)",
  },
};

export const darkTheme: Theme = {
  ...variables,
  colors: {
    background: "#1A1D1E",
    borderMain: "#494C5A",
    borderOuter: "#03040D",
    borderInner: "#03040D",
    primary: "#E54732",
    secondary: "#F2EBEA",
    accent: "#282A2B",
    text: "#F2EBEA",
    icon: "#E54732",
  },
  gradients: {
    homeContainer:
      "linear-gradient(180deg, #435C6B 0%, #272C3F 52.95%, #4A2A25 100%)",
  },
};

const theme: Themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const getColors =
  (key: keyof Theme["colors"]) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.colors?.[key];

export const getGradients =
  (key: keyof Theme["gradients"]) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.gradients?.[key];

export const getStyle =
  <G extends keyof Theme, V extends keyof Theme[G]>(groupKey: G, valueKey: V) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme?.[groupKey]?.[valueKey];

export default theme;
