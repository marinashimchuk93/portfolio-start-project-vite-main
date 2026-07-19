import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const SectionTitle = styled.h2`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  color: ${theme.colors.fontText};
  margin-bottom: 80px;

  position: relative;

  &::after {
    content: "";
    display: inline-block;
    border-radius: 2px;
    width: 100px;
    height: 4px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    bottom: -4px;
    transform: translateX(-50%);
  }

  @media ${theme.media.tablet} {
    margin-bottom: 50px;
  }
`