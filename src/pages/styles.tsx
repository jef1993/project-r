import styled from "styled-components";
import variables, { border } from "../styles/variables";
import { getColors } from "../styles/themes";
import { motion } from "framer-motion";
import { headingFont } from "../styles/mixins";

export const StyledHome = styled(motion.section)`
  display: grid;
  height: 100%;
  overflow: hidden;
  & .home {
    &__intro {
      grid-area: 1/1/-1 / span 7;
      overflow: hidden;
    }

    &__location {
      grid-column: 8/-1;
      overflow: hidden;
    }

    &__link {
      grid-column: 8/-1;
      grid-row-end: span 2;
      border: ${variables.border.widthM} solid ${getColors("borderMain")};
      border-radius: ${variables.border.radiusM};
      overflow: hidden;
    }

    &__nav {
      &__list {
      }

      &__item {
      }
    }
  }
`;

export const StyledExperience = styled(motion.section)`
  margin-inline: auto;
  flex: 1 1 0;
  padding: 32px 32px;
  border-inline: 1px solid ${getColors("borderMain")};
  /* border-radius: ${border.radiusM};
  border: ${border.widthM} solid ${getColors("borderMain")}; */
  @media screen and (max-width: 1300px) {
    border: 0;
  }

  & .test {
    height: 1000px;
    width: inherit;

    & h1 {
      ${headingFont};
      font-size: 42px;
      font-weight: 700;
      font-variation-settings: "ital" 0, "wdth" 150, "wght" 800;
    }

    & p {
      margin-top: 24px;
      font-size: 20px;
      color: #e9e9e9;
      font-weight: 300;
      line-height: 135%; /* 1.89rem */
      letter-spacing: -0.028rem;
    }
  }
`;

export const StyledLoading = styled(motion.div)``;

export const StlyedGrids = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  margin-inline: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  & .grids {
    &__intro {
      grid-area: 1/1/-1 / span 7;
      border-radius: 1.2rem;
      background: linear-gradient(
        180deg,
        #435c6b 0%,
        #272c3f 52.95%,
        #4a2a25 100%
      );
    }

    &__location {
      grid-column: 8/-1;
      overflow: hidden;
    }

    &__ctn {
      grid-column: 8/-1;
      grid-row-end: span 2;
      border-radius: 1.2rem;
      /* border: 1px solid #03040d; */
      /* background: #282a2b; */
      overflow: hidden;
      box-sizing: border-box;
      position: relative;
      /* box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.3); */
      display: flex;
      flex-direction: column;

      & > .inner {
        flex: 1 1 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background: #282a2b;
        border: 1px solid transparent;
        border-radius: inherit;
      }

      & a {
        height: 100%;
        width: 100%;
        border-radius: inherit;
        display: inline-block;
      }
    }
  }
`;
