import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

export const Nav = styled.nav`
  background-color: ${({ navbar }) => (navbar ? "#000" : "transparent")};
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  position: fixed;
  width: 100%;

  padding: 0 calc(100vw - 90%);
  transition: background-color ease-in-out 0.7s;
`;
export const NavLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.6em;

  &:hover {
    color: #2f81e6;
  }
`;
export const NavIcon = styled(FaBars)`
  display: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.7em;

  &:hover {
    color: #2f81e6;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    z-index: 999;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? 0 : "-1000px")};
    bottom: 0;
    
    align-items: center;
    justify-content: space-evenly;

    height: 100vh;

    background: #222;
    
    transition: right ease-in .5s;
    /* transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-1000")}); */
  }
`;
export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.3em;

  &:hover {
    color: #2f81e6;
  }
`;

export const CloseIcon = styled(AiFillCloseCircle)`
  color: #fff;
  font-size: 1.7em;
  position: absolute;
  display: none;
  top: 30px;
  right: 50px;
  cursor: pointer;

  &:hover {
    color: #2f81e6;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
