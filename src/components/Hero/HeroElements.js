import styled from "styled-components";

export const HeroContainer = styled.div``;
export const HeroBg = styled.div`
  width: 100%;
  height: 100vh;

  /* background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),
    url("https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  position: relative;
  z-index: -1;
  filter: blur(8px);
  -webkit-filter: blur(2px);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: 800;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: inherit;
    height: inherit;
  }
`;

export const HeroContent = styled.div`
  color: #fff;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: 80%;
  padding: 20px;
  text-align: center;
`;

export const HeroHeading = styled.h1`
  font-size: clamp(2rem, 50vw, 4rem);
  margin-bottom: 0.4em;
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 5vw, 1.4rem);
  margin-bottom: 1.5em;
  color: #eee;
`;

export const HeroBtn = styled.button`
  font-size: clamp(1rem, 5vw, 1.4rem);
  outline: none;
  border: none;
  padding: 0.5em 1.2em;
  border-radius: 10px;
  background: rgba(47, 129, 230, 1);
  color: #fff;

  &:hover {
    background: rgba(47, 129, 230, 0.9);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
