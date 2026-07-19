import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll";
import {theme} from "../../styles/Theme.tsx";

export const GoTopButton: React.FC = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])


  return (
    <>
      {showButton && (
        <StyledGoTopButton
          onClick={() => {
            scroll.scrollToTop()
          }}
        >
          <Icon
            iconId={'goTop'}
            width={'16'}
            height={'15'}
            viewBox={'0 0 16 15'}
          />
        </StyledGoTopButton>)}
    </>
  );
};

const StyledGoTopButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid ${theme.colors.fontText};
  border-radius: 50%;
  color: ${theme.colors.fontText};
  transition: ${theme.animations.transition};

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: scale(1.05);
  }

  body.menu-open & {
    opacity: 0;
    pointer-events: none;
    transform: scale(0.8);
  }
`

