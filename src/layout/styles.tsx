import styled from "styled-components";
import { border } from "../styles/variables";
import { getColors } from "../styles/themes";
import { headingFont, headingThinFont } from "../styles/mixins";
import { motion } from "framer-motion";

export const StyledHeader = styled(motion.header)`
  border-radius: ${border.radiusM};
  border: ${border.widthM} solid ${getColors("borderMain")};
  grid-column: 1/-1;
  grid-row: 1 / span 4;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  gap: 0.8rem;
  margin-inline: 1.6rem;
  width: 100%;
  margin-inline: auto;
  z-index: 10;
  background-color: ${getColors("background")};
  padding: 0 1.2rem;
  align-items: center;

  & .header {
    &__pattern {
      grid-area: 1/7/-1/-1;

      & > .links {
        display: flex;
        gap: 12px;
      }
    }
  }
`;

export const StyledHeaderLogo = styled(motion.div)`
  text-transform: uppercase;
  align-self: flex-end;
  grid-area: 1/1/-1/-1;

  /* grid-column: 1 / span 6;
  grid-row: 2/-1;
  height: 100%; */

  & .header-logo {
    &__title {
      ${headingThinFont}
      font-size: 3rem;
      line-height: 100%;
    }

    &__name {
      padding-top: 0.05em;
      ${headingFont};
      font-size: 5.6rem;
      line-height: 100%;
    }
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  margin-inline: 1.6rem;
  gap: 8px;
  margin-inline: auto;
  z-index: 10;
  /* background-color: ${getColors("background")}; */
  height: 60px;
  font-size: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledLoading = styled(motion.div)`
  grid-area: 5/1/-1/-1;
  background-color: red;
`;

export const StyledBgGrid = styled(motion.div)`
  height: 100%;

  width: 1000px;
  top: 0;
  left: 0;
  z-index: -1;
  position: fixed;
  background-size: 100px;
  opacity: 0.4;
  border-inline: 1px solid ${getColors("borderMain")};
`;
