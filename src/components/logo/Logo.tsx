import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

export const Logo: React.FC = () => {
  return (
    <StyledLogo href="/">
      Vahid Navazan
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  font-family: "Comfortaa", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.8;
  color: ${theme.colors.fontText};

  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.fontText};
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`
