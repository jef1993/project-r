import styled from "styled-components";
import heroImg from "../../assets/hero.jpg";

const StyledHero = styled.section`
  height: 150vh;
  background-image: linear-gradient(9deg red, blue);
  /* display: grid;
  
  grid-template-columns: minmax(6.4rem, 1fr) 118.8rem minmax(6.4rem, 1fr);
  grid-template-rows: 60% auto; */
  & .hero {
    &__banner {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      /* background-image: url(${heroImg});
      background-position: center;
      background-size: calc(100vmax - 3.2rem) auto;
      background-repeat: no-repeat;
      grid-column: 1/-1;
      height: 75%;
      margin-top: 5vh; */
    }

    &__content {
      grid-column: 2 / span 1;
    }
  }
`;

export default StyledHero;
