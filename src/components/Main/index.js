import React from "react";
import { Container, GridContainer } from "../../AppElements";
import Section from "../Section";
import SectionTwo from "../Section2";
import {
  Box,
  CardContainer,
  ImageWrapper,
  ContentWrapper,
  ContentTitle,
  ContentSubtitle,
  ContentBody
} from "./MainElements";

const Main = () => {
  return (
    <>
      <Container>
        <CardContainer>
          <ImageWrapper>
            <img src="https://images.pexels.com/photos/4427813/pexels-photo-4427813.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
          </ImageWrapper>
          <ContentWrapper>
            <ContentTitle>LOREM IPSUM DOLOR</ContentTitle>
            <ContentSubtitle>
              maecenas feugiat ex purus, quis volutpat lacus placerat
            </ContentSubtitle>
            <hr />
            <ContentBody>
              <p>
                Cras aliquet urna ut sapien tincidunt, quis malesuada elit
                facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh
                a libero pharetra elementum. Maecenas feugiat ex purus, quis
                volutpat lacus placerat malesuada. Praesent in sem ex. Morbi
                mattis sapien pretium tellus venenatis, at egestas urna ornare.
              </p>
              <p>
                Vivamus fermentum nibh vel pharetra blandit. Cras a purus urna.
                Sed et libero ex. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Suspendisse id
                hendrerit felis. Nulla viverra tempor dui at congue.
                Pellentesque quis nulla ornare, congue nisi id, finibus nulla.
                Aliquam sit amet hendrerit purus. Donec libero massa, posuere
                fermentum eros sit amet, maximus fringilla augue. Maecenas at
                rhoncus lorem. Vivamus ultricies consequat est, efficitur
                convallis libero. Vivamus rutrum semper mauris, vitae consequat
                eros tempor ac. Pellentesque et ornare sapien
              </p>
            </ContentBody>
          </ContentWrapper>
        </CardContainer>
      </Container>
      <Section />

      <Container>
        <Box>
          <div className="item1">
            <CardContainer>
              <ImageWrapper>
                <img src="https://images.pexels.com/photos/5745870/pexels-photo-5745870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </ImageWrapper>
              <ContentWrapper>
                <ContentTitle>LOREM IPSUM DOLOR</ContentTitle>
                <ContentSubtitle>maecenas feugiat ex purus,</ContentSubtitle>
                <hr />
                <ContentBody>
                  <p>
                    Cras aliquet urna ut sapien tincidunt, quis malesuada elit
                    facilisis. Vestibulum sit amet tortor velit. Nam elementum
                    nibh a libero pharetra elementum. Maecenas feugiat ex purus,
                    quis volutpat lacus placerat malesuada. Praesent in sem ex.
                    Morbi mattis sapien pretium tellus venenatis, at egestas
                    urna ornare.
                  </p>
                </ContentBody>
              </ContentWrapper>
            </CardContainer>
          </div>
          <div className="item2">
            <CardContainer>
              <ImageWrapper>
                <img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </ImageWrapper>
              <ContentWrapper>
                <ContentTitle>VESTIBULUM SIT AMET</ContentTitle>
                <ContentSubtitle>
                  mattis sapien pretium tellus venenatis
                </ContentSubtitle>
                <hr />
                <ContentBody>
                  <p>
                    Cras aliquet urna ut sapien tincidunt, quis malesuada elit
                    facilisis. Vestibulum sit amet tortor velit. Nam elementum
                    nibh a libero pharetra elementum. Maecenas feugiat ex purus,
                    quis volutpat lacus placerat malesuada. Praesent in sem ex.
                    Morbi mattis sapien pretium tellus venenatis, at egestas
                    urna ornare.
                  </p>
                </ContentBody>
              </ContentWrapper>
            </CardContainer>
          </div>
        </Box>
      </Container>
      <SectionTwo />
    </>
  );
};

export default Main;
