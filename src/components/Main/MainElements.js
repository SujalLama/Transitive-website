import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background: #fff;
  margin: 2em 0;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 450px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 3em 2em 1.5em;
`;

export const ContentTitle = styled.h2`
  font-size: 2em;
  margin: 0.9em 0;
  text-align: center;
`;

export const ContentSubtitle = styled.h4`
  color: #aaa;
  font-size: 1.5em;
  margin: 0.6em 0;
  text-align: center;
`;

export const ContentBody = styled.div`
  color: #aaa;
  p {
    padding: 1em 0;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(1fr, 600px));
  grid-gap: 2em;

  .item1 {
    grid-column: 1 /2;
  }

  .item2 {
    grid-column: 2/3;
  }

  @media screen and (max-width: 768px) {
    .item1 {
      grid-column: 1 /-1;
    }

    .item2 {
      grid-column: 1/-1;
    }
  }
`;
