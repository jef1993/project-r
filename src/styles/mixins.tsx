import { css } from "styled-components";
import { fonts } from "./variables";

export const scrollBar = css`
  &::-webkit-scrollbar {
    width: 2.4rem;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb {
    background: #1414149d;
    border: 0.4rem solid transparent;
    /* border-color: ${({ theme }) => theme.colors.primary}; */
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0.8rem;
    background-clip: content-box;
  }
`;

export const mainColGrid = css`
  display: grid;
  grid-template-columns: repeat(7, minmax(6.6rem, 1fr)) repeat(
      5,
      minmax(0, 1fr)
    );
  column-gap: 4.2rem;
`;

export const headingM = css`
  font-variation-settings: "ital" 0, "wdth" 100, "wght" 800;
  letter-spacing: -0.05em;
  line-height: 100%;
`;

export const headingS = css`
  font-variation-settings: "ital" 0, "wdth" 100, "wght" 500;
  letter-spacing: -0.05em;
  line-height: 100%;
`;

export const headingThin = css`
  font-size: 3rem;
  font-family: ${fonts.fontFace.sub};
  font-variation-settings: "wdth" 50, "wght" 100;
  letter-spacing: 0.24em;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.secondary};
`;
