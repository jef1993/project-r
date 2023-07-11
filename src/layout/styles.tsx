import { styled } from "styled-components";
import { headingM, headingS, headingThin, mainColGrid } from "../styles/mixins";
import { fonts } from "../styles/variables";
import { motion } from "framer-motion";

const StyledLayout = styled.div`
  /* background-image: linear-gradient(0deg, blue, red); */
  height: 100%;
  /* max-width: 192rem; */
  margin-inline: auto;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 0.4rem;
    top: -2.4rem;
    bottom: -2.4rem;
    right: 0;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledHeader = styled(motion.header)`
  /* height: 100%; */
  display: flex;
  gap: 4.2rem;
  ${mainColGrid};

  & .header {
    &__left {
      grid-column: 1 / span 7;
      position: relative;
    }

    &__logo {
      text-transform: uppercase;

      line-height: initial;
      align-self: flex-start;
      position: relative;
      white-space: nowrap;

      &__link {
        letter-spacing: -0.05em;
        ${headingM};
        line-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }

      &__title {
        position: absolute;
        text-transform: uppercase;
        ${headingThin};
        align-self: flex-end;
        top: 0;
        left: 0;
      }
    }

    &__ctn {
      flex-grow: 1;
      display: grid;
    }

    &__avatar {
      border: 0.4rem solid ${({ theme }) => theme.colors.primary};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      grid-area: 2/2 / span 1 / span 1;
    }

    &__nav {
      grid-column: 8/-1;
      /* flex-grow: 1; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      right: 0;
      overflow: hidden;

      &__list {
        list-style: none;
        display: flex;
        flex-direction: column;
        right: 0;
        position: relative;
      }

      &__item {
        border-bottom: 0.2rem solid ${({ theme }) => theme.colors.primary};
        overflow: hidden;
        position: relative;

        &:not(:last-of-type) {
          /* margin-bottom: 2.4rem; */
        }
      }

      &__link {
        position: absolute;
        ${headingS};
        font-size: 6.4rem;
        text-transform: uppercase;
        top: 2rem;
      }
    }
  }
`;

export default StyledLayout;
