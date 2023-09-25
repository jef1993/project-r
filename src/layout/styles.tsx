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
  /* grid-template-rows: 1fr auto; */
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
      /* grid-row: 1/-1; */
    }
  }
`;

export const StyledHeaderLogo = styled(motion.div)`
  text-transform: uppercase;
  align-self: flex-end;
  grid-column: 1 / span 6;

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
  margin-inline: 1.6rem;
  gap: 8px;
  max-width: 1408px;
  margin-inline: auto;
  z-index: 10;
  background-color: ${getColors("background")};
  grid-column: 1/-1;
  grid-row: 12 / -1;
  width: calc(100% - 3.2rem);
`;
