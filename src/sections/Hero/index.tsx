import StyledHero from "./styles";

const Hero = () => {
  return (
    <StyledHero className="hero">
      <div className="hero__banner"></div>
      <div className="hero__content">
        <h3 className="hero__headers">
          <span>accessible sites.</span>
          <span>sustainable codes.</span>
          <span>design enthusiast.</span>
        </h3>
        <p className="hero__intro">
          Lorem ipsum dolor sit amet consectetur. Et nullam est condimentum
          ipsum pretium risus id nibh. A blandit amet vitae erat proin aliquam
          eget convallis metus. Gravida orci in turpis malesuada pellentesque a.
        </p>
      </div>
    </StyledHero>
  );
};

export default Hero;
