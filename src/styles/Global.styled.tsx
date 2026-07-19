import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    font-family: "Nunito", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    line-height: 1.5;
    color: ${theme.colors.fontText || '#000'};
    background-color: ${theme.colors.primaryBg || '#FFF'};
    min-width: 375px;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, html {
    overflow-x: hidden;
  }

  body.menu-open {
    overflow: hidden;
  }

  ul {
    list-style: none;
  }

  a,
  button,
  label,
  input {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input,
  textarea,
  button {
    font: inherit;
  }

  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 2px solid ${theme.colors.accent || '#000'};
    outline-offset: 2px;
  }

  :where([fill]:not(
  [fill="none"],
  [fill^="url"]
)) {
    fill: currentColor;
  }

  :where([stroke]:not(
  [stroke="none"],
  [stroke^="url"]
)) {
    stroke: currentColor;
  }

  svg * {
    transition-property: fill, stroke;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`