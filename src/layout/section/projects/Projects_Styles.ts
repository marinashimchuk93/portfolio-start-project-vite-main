import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

const Projects = styled.section`
  padding-block: 72px;

  @media ${theme.media.mobile} {
    padding-block: 40px;
  }
`

const ProjectsWrapper = styled(FlexWrapper)`
  align-items: center;

  & > div[data-even="true"] {
    & > div:first-child {
      flex-direction: row-reverse;

      @media ${theme.media.tablet} {
        flex-direction: column-reverse;
      }
    }
  }

  @media ${theme.media.mobile} {
    gap: 50px;
  }
`

const StyledProject = styled.div`
  max-width: 992px;
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
  background: ${theme.colors.secondaryBg};
  overflow: hidden;
`

const TextWrapper = styled.div<{ isEven?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 1 50%;
  padding: ${props => props.isEven
    ? "145px 50px 145px 40px"
    : "145px 40px 145px 50px"};

  @media ${theme.media.tablet} {
    flex: 1 1 100%;
    padding: 85px 25px;
  }
`

const TitleProject = styled.h3`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: ${theme.colors.fontText};
`

const DescriptionProject = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${theme.colors.fontDescription};
`

const ImageWrapper = styled.div`
  flex: 1 1 50%;

  @media ${theme.media.tablet} {
    flex: 1 1 100%;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


export const S = {
  Projects,
  ProjectsWrapper,
  StyledProject,
  TextWrapper,
  TitleProject,
  DescriptionProject,
  ImageWrapper,
  Image,
}