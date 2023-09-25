import styled from "styled-components";
import variables, { border } from "../styles/variables";
import { getColors } from "../styles/themes";
import { motion } from "framer-motion";

export const StyledHome = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
  overflow: auto;
  border-radius: ${border.radiusM};
  border: ${border.widthM} solid ${getColors("borderMain")};

  & .test {
    height: 2000px;
    background: red;
    width: inherit;
    background-image: linear-gradient(
      180deg,
      red,
      orange,
      yellow,
      #0080004b,
      #0000ff47
    );
  }
`;
