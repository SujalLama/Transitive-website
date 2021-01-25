import React, { useState } from "react";
import {
  Nav,
  NavLogo,
  NavIcon,
  NavMenu,
  NavLink,
  CloseIcon
} from "./NavbarElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <Nav navbar={navbar}>
        <NavLogo>Transitive</NavLogo>
        <NavIcon onClick={toggle} />
        <NavMenu isOpen={isOpen}>
          <CloseIcon onClick={toggle} />
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Contact</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
