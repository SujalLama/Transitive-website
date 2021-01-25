import styled from "styled-components";
import { Link } from "react-scroll";
import { MdArrowUpward } from "react-icons/md";

export const FooterWrapper = styled.div`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 2em 0;
`;

export const Icon = styled(MdArrowUpward)`
  color: #fff;
  font-size: 2em;

  cursor: pointer;
  transition: all ease-in-out 0.5s;
  &:hover {
    color: #2f81e6;
    transform: scale(3);
    transform: translateY(-0.2em);
    transition: all ease-in-out 1s;
  }
`;

export const GoUp = styled(Link)`
  position: absolute;
  right: 1em;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.2em;
`;
