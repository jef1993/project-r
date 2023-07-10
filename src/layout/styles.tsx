import { styled } from "styled-components";
import { headingM, headingS, headingThin, mainColGrid } from "../styles/mixins";
import { fonts } from "../styles/variables";

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

export const StyledHeader = styled.header`
  height: 100%;
  display: flex;
  gap: 4.2rem;

  ${mainColGrid};

  & .header {
    &__left {
      grid-column: 1 / span 7;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    &__logo {
      text-transform: uppercase;
      ${headingM};
      font-size: 10.2rem;
      display: flex;
      flex-direction: column;
      align-self: flex-start;

      & > span {
        align-self: flex-end;
        margin-top: -1.2rem;
      }
    }

    &__title {
      text-transform: uppercase;
      ${headingThin};
      margin-bottom: 2.4rem;
    }

    &__avatar {
      border: 0.4rem solid ${({ theme }) => theme.colors.primary};
      flex-grow: 1;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    &__nav {
      grid-column: 8/-1;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &__list {
        list-style: none;
      }

      &__item {
        border-bottom: 0.2rem solid ${({ theme }) => theme.colors.primary};

        &:not(:last-of-type) {
          margin-bottom: 2.4rem;
        }
      }

      &__link {
        ${headingS};
        font-size: 6.4rem;
        text-transform: uppercase;
      }
    }
  }
`;

export default StyledLayout;
