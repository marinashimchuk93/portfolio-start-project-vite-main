import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {font} from "../../../styles/Common.tsx";

const Main = styled.section`
  padding-block: 55px 182px;

  & > div:first-child {
    position: relative;
  }

  @media ${theme.media.desktop} {
    padding-block: 0 50px;
  }
`

const TextWrapper = styled(FlexWrapper)`
  max-width: 508px;
  width: 100%;
  z-index: 200;

  @media ${theme.media.desktop} {
    max-width: 100%;
    z-index: 1;
    padding-top: 600px;
  }

  @media ${theme.media.mobile} {
    padding-top: 400px;
  }
`

const MainTitle = styled.h1`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  color: ${theme.colors.accent};

  p {
    display: none;
  }
`

const Name = styled.span`
  ${font({
    family: '"Roboto", sans-serif',
    weight: 700,
    color: theme.colors.fontName,
    Fmax: 64,
    Fmin: 42
  })}
  margin-bottom: 32px;
  line-height: 1.2;
  display: block;
`

const Description = styled.p`
  max-width: 486px;
  margin-bottom: 32px;
  font-weight: 400;
  font-size: 24px;
  color: ${theme.colors.fontDescription};

  @media ${theme.media.desktop} {
    max-width: 100%;
  }
`

const PhotoWrapper = styled.div`
  position: absolute;
  z-index: 100;
  right: -165px;
  top: -300px;
  width: 777px;
  height: 877px;

  background-color: ${theme.colors.accent};
  mask-image: url('/images/maskYellow.svg');
  mask-repeat: no-repeat;
  mask-position: left bottom;
  mask-size: cover;

  @media ${theme.media.mobile} {
    right: 0;
    left: 0;
    top: -185px;
    width: 486px ;
    height: 550px;
  }

`

const Photo = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 720px;
  height: 629px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 450px;
    height: 413px;
  }
`;

export const S = {
  Main,
  TextWrapper,
  MainTitle,
  Name,
  Description,
  PhotoWrapper,
  Photo,
}