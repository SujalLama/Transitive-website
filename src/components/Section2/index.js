import React from "react";
import { Container } from "../../AppElements";
import {
  SectionWrapper,
  SectionItem,
  SectionTitle,
  SectionBody,
  SectionBtn
} from "./Section2Elements";

const SectionTwo = () => {
  return (
    <>
      <SectionWrapper>
        <Container>
          <SectionItem>
            <SectionTitle>MORBI INTERDUM MOLLIS SAPIEN</SectionTitle>
            <SectionBody>
              Cras aliquet urna ut sapien tincidunt, quis malesuada elit
              facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a
              libero pharetra elementum. Maecenas feugiat ex purus, quis
              volutpat lacus placerat malesuada. Praesent in sem ex. Morbi
              mattis sapien pretium tellus venenatis, at egestas urna ornare.
            </SectionBody>
            <SectionBtn>Learn more</SectionBtn>
          </SectionItem>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default SectionTwo;
