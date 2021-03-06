import React from "react";
import {
  HeroContainer,
  HeroHeading,
  HeroP,
  HeroBtn,
  HeroBg,
  HeroContent
} from "./HeroElements";
import commute from "../../assets/commute1.mp4";

const Hero = () => {
  return (
    <>
      <HeroContainer id="hero">
        <HeroBg>
          <video autoplay muted loop>
            <source src={commute} type="video/mp4"></source>
          </video>
        </HeroBg>

        <HeroContent>
          <HeroHeading>Transitive</HeroHeading>
          <HeroP>
            A full responsive, business-oriented HTML5/CSS3 template built by
            Templated and released under the Creative Commons.
          </HeroP>
          <HeroBtn>Get Started</HeroBtn>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
