import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(1fr, 100px));
  grid-gap: 2em;
  grid-auto-rows: 200px;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
