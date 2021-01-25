import React from "react";
import { FooterWrapper, Icon, GoUp } from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        Created by Sujal Lama. &copy; 2021
        <GoUp to="hero" spy={true} smooth={true} duration={1000}>
          <Icon />
        </GoUp>
      </FooterWrapper>
    </>
  );
};

export default Footer;
