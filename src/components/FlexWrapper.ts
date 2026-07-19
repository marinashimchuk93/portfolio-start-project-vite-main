// import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../styles/Theme.tsx";

type FlexWrapperProps = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  gap?: string

  desktopDirection?: "row" | "column" | "row-reverse" | "column-reverse"
  tabletDirection?: "row" | "column" | "row-reverse" | "column-reverse"
  mobileDirection?: "row" | "column" | "row-reverse" | "column-reverse"
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  height: 100%;
  display: flex;
  flex-direction: ${props => (props.direction || 'row')};
  justify-content: ${props => (props.justify || 'flex-start')};
  align-items: ${props => (props.align || 'stretch')};
  flex-wrap: ${props => (props.wrap || 'nowrap')};
  gap: ${props => (props.gap || '0px')};

  ${props => props.desktopDirection && css`
    @media ${theme.media.desktop} {
      flex-direction: ${props.desktopDirection};
    }
  `}

  ${props => props.tabletDirection && css`
    @media ${theme.media.tablet} {
      flex-direction: ${props.tabletDirection};
    }
  `}

  ${props => props.mobileDirection && css`
    @media ${theme.media.mobile} {
      flex-direction: ${props.mobileDirection};
    }
  `}
`