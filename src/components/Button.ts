// import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";


export const Button = styled.button`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.fontText};
  border: 2px solid ${theme.colors.fontText};
  border-radius: 8px;
  padding: 8px 24px;
  background-color: ${theme.colors.secondaryBg};
  transition: ${theme.animations.transition};

  &:hover {
    border: 2px solid transparent;
    background-color: ${theme.colors.accent};
  }
`
