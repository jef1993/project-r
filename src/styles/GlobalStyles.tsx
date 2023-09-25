import { createGlobalStyle } from "styled-components";
import { scrollBar } from "./mixins";
import { getColors } from "./themes";
import variables, { border } from "./variables";

const GlobalStyles = createGlobalStyle`

  :where(*, *::before, *::after) {
    margin: 0;
    padding: 0;
    font-family: ${variables.fontFace.main};
    box-sizing: border-box;
    /* border: 1px solid red; */
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: ${({ theme }) => theme.fontFace.main};
    font-variation-settings: "ital" 0, "wdth" 100, "wght" 400;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: sans-serif;
    height: inherit;
    height: 100vh;
    max-height: 100svh;
    overflow: hidden;
    background-color: ${getColors("background")};
  }

  #root {
    height: inherit;
    display: flex;
    flex-direction: column; 
    align-items: center; 
     overflow: hidden;
  }

  .App {
    height: inherit;
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
  }

  .page-container {
    display: grid;
    gap: 8px;
    height: inherit;
    overflow: hidden;
    margin: auto;
    flex: 1 1 0;

  }

  .page-content {
    width: 100%;
    margin-bottom: 0.6rem;

  }


  .main {
    grid-area: 5/1/span 7/-1;
    overflow-y: hidden;
    position: relative;
    margin-inline: auto;
    width: 100%;
    display: flex;
    flex-direction: column;


    /* width: calc(100vw - 3.2rem);
      max-width: 1408px; */
      
      /* background-color: ${getColors("background")}; */
      /* border-radius: ${border.radiusM};
      border: ${border.widthM} solid ${getColors("borderMain")};
      border: none; */



    /* &::before {
      position: absolute;
      content: '';
      inset-block: 0;
      left: 50%;
      transform: translateX(-50%);
      max-width: 1408px;


      background-color: ${getColors("background")};
      border-radius: ${border.radiusM};
      border: ${border.widthM} solid ${getColors("borderMain")};
    } */


    /* background-color: ${getColors("background")};
    border-radius: ${border.radiusM};
     border: ${border.widthM} solid ${getColors("borderMain")}; */
  }

  .main-wrapper {
  }

  

  .simple-bar {
    grid-area: 5/1/span 7/-1;
    -webkit-overflow-scrolling: touch;
    max-width: 100vw;
    height: 100%;
    flex: 1 1 0;

    & .simplebar-track.simplebar-vertical {
       /* position: fixed !important; */
       width: 16px;
       z-index: 5;
       /* padding-block: 6px; */

    }

    & .simplebar-scrollbar {
      left: 2px;
      right: 2px;

      &::before {
        top: 6px;
        bottom: 6px;
      }

    }

  

  }



  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default GlobalStyles;
