import React from "react";
import { Container, GridContainer } from "../../AppElements";
import {
  SectionWrapper,
  SectionItem,
  SectionItem2,
  SectionItem3,
  SectionTitle,
  SectionBody,
  SectionBtn
} from "./SectionElements";

const Section = () => {
  return (
    <>
      <SectionWrapper>
        <Container>
          <GridContainer>
            <SectionItem>
              <SectionTitle>TEMPUS FEUGIAT</SectionTitle>
              <SectionBody>
                TEMPUS FEUGIAT Morbi interdum mollis sapien. Sed ac risus.
                Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu
              </SectionBody>
              <SectionBtn>Learn more</SectionBtn>
            </SectionItem>

            <SectionItem2>
              <SectionTitle>ALIQUAM NULLA</SectionTitle>
              <SectionBody>
                Ut convallis, sem sit amet interdum consectetuer, odio augue
                aliquam leo, nec dapibus tortor nibh sed
              </SectionBody>
              <SectionBtn>Learn more</SectionBtn>
            </SectionItem2>

            <SectionItem3>
              <SectionTitle>SED MAGNA</SectionTitle>
              <SectionBody>
                Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
                diam sit amet mi ullamcorper vehicula.
              </SectionBody>
              <SectionBtn>Learn more</SectionBtn>
            </SectionItem3>
          </GridContainer>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Section;
