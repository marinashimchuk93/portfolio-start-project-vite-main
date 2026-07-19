import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Link} from "react-scroll";

const NavLink = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 18px;
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
    transition: ${theme.animations.transition}
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }

  @media ${theme.media.tablet} {
    font-size: 30px;
  }
`

// Desktop Menu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 48px;
  }
`

// Mobile Menu
const MobileMenu = styled.nav`
  z-index: 300;
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(253 196 53 / 0.9);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.2s cubic-bezier(0.1, 0.76, 0.55, 0.94), opacity 0.5s ease;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    transform: translateY(20px);
    transition: ${theme.animations.transition};
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
    opacity: 1;

    ul {
      transform: translateY(0);
    }
  `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  z-index: 1000;
  background-color: transparent;
  border: 1px solid transparent;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.fontText};
    position: absolute;
    top: 50%;
    right: 3px;
    transform: translateY(-50%);
    border-radius: 10px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgb(255 255 255 / 0);
    `}
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.fontText};
      transform: translateY(-5px);
      border-radius: 10px;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0) rotate(-45deg);
      `}
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.fontText};
      transform: translateY(5px);
      border-radius: 10px;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0) rotate(45deg);
      `}
    }
  }

  &:hover {
    border: 1px solid ${theme.colors.fontText};
    border-radius: 8px;
  }
`


export const S = {
  NavLink,
  DesktopMenu,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
}




