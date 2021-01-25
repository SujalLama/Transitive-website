import styled from "styled-components";

export const SectionWrapper = styled.div`
  padding: 4em 0;
  margin: 4em 0;
  color: #fff;

  background: linear-gradient(153deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media screen and (max-width: 768px) {
    background-attachment: scroll;
  }
`;

export const SectionItem = styled.div`
  grid-column: 1 / 4;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 2em;
  border-right: 1px solid #fff;
  border-bottom: none;
  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
    border-bottom: 1px solid #aaa;
    border-right: none;
  }
`;

export const SectionItem2 = styled.div`
  grid-column: 4 / 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 2em;
  border-right: 1px solid #fff;
  border-bottom: none;
  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
    border-bottom: 1px solid #aaa;
    border-right: none;
  }
`;

export const SectionItem3 = styled.div`
  grid-column: 8 / 12;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  padding: 0.6em 0;
`;

export const SectionBody = styled.p`
  text-align: center;
  color: #ddd;
  padding: 0.5em 0;
`;

export const SectionBtn = styled.button`
  margin-top: 0.6em;
  text-transform: uppercase;
  padding: 0.6em 0.9em;
  outline: none;
  background: inherit;
  color: white;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
