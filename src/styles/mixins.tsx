import { css } from "styled-components";
import variables from "./variables";

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

export const headingFont = css`
  font-family: ${variables.fontFace.main};
  color: ${({ theme }) => theme.colors.primary};
  font-variation-settings: "ital" 0, "wdth" 150, "wght" 950;
  letter-spacing: -0.04em;
  line-height: 86%;
  text-transform: uppercase;
`;

export const headingS = css`
  font-variation-settings: "ital" 0, "wdth" 100, "wght" 500;
  letter-spacing: -0.02em;
  line-height: 100%;
`;

export const headingThinFont = css`
  font-size: 3rem;
  font-family: ${variables.fontFace.sub};
  font-variation-settings: "wdth" 50, "wght" 100;
  font-weight: 100;
  letter-spacing: 0.13em;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.secondary};
`;
