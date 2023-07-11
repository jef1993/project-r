import { createGlobalStyle } from "styled-components";
import { scrollBar } from "./mixins";
import theme from "./themes";

const GlobalStyles = createGlobalStyle`

  :where(*, *::before, *::after) {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fontFace.main};
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

  /* :where(#root) {
     height: 100%;
  } */
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: sans-serif;
    background-image: ${({ theme }) => theme.gradients.background};
    background-repeat: no-repeat;
    height: inherit;
    height: 100vh;
    max-height: 100svh;
    overflow: hidden;
  }

  #root {
    height: inherit;
    display: flex;
    flex-direction: column;
  }

  .App {
    flex-grow: 1;
    padding: 2.4rem;
    padding-right: 0;
    scrollbar-gutter: stable; 
    overflow-y: auto;
    ${scrollBar};
    flex-grow: 1;
    position: relative;

    /* &::after {
    content: '';
    position: fixed;
    width: 0.4rem;
    top: 0;
    right: 2.4rem;
    height: 100vh;
    height: 100svh;
    background-color: ${({ theme }) => theme.colors.primary};
  } */
  }

  .background {
    width: 100vmax;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    

    
    & > g {
      /* fill: ${({ theme }) => theme.colors.contourFill}; */
      fill: hsla(0, 0%, 100%, 0.00);
      animation: mapEffect 1.2s ease-in-out 0s forwards;
      filter: drop-shadow(2px 2px 2px transparent);

      @keyframes mapEffect {
        to {
          filter: drop-shadow(2px 2px 2px '#fff');
          fill: hsla(0, 0%, 100%, 0.04);
        }
        
      }
    }

  }


  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default GlobalStyles;
