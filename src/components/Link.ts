// import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";


type LinkProps = {
  border: string;
  borderRadius: string;
  borderHover: string;
}


export const Link = styled.a<LinkProps>`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.fontText};
  padding: 8px 24px;
  background-color: ${theme.colors.secondaryBg};
  border: ${props => (props.border || 'none')};
  border-radius: ${props => (props.borderRadius || '8px')};
  transition: ${theme.animations.transition};

  &:hover {
    border: ${props => (props.borderHover || '2px solid transparent')};
    background-color: ${theme.colors.accent};
  }
`

