import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

const Footer = styled.footer`
  padding-top: 28px;
  position: relative;
  padding-bottom: 240px;

  & > div {
    position: relative;
    z-index: 200;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("./icons/yellowLine.svg");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% 100%;
    z-index: 100;

    @media ${theme.media.desktop} {
      background-size: 100% auto;
    }
  }

  @media ${theme.media.tablet} {
    padding-bottom: 177px;
  }
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  color: ${theme.colors.fontText};
  transition: ${theme.animations.transition};

  &:hover {
    color: ${theme.colors.accent};
    transform: translateY(-3px);
  }
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.fontDescription};
`

export const S = {
  Footer,
  SocialList,
  SocialLink,
  Copyright,
}