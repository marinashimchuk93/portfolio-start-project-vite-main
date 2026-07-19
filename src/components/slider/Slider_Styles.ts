import {theme} from "../../styles/Theme.tsx";
import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -40%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Slider = styled.div`
  position: relative;
  max-width: 770px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > .keen-slider {
    background: ${theme.colors.secondaryBg};
    border-radius: 24px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
  }
`

const Slide = styled.figure`
  padding: 85px 130px 20px;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 17px;
    left: 52px;
    width: 40px;
    height: 32px;
    background-image: url('/images/testimony.svg');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% auto;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 17px;
    right: 52px;
    width: 40px;
    height: 32px;
    background-image: url('/images/testimony.svg');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% auto;
    transform: rotate(180deg);
    pointer-events: none;
  }

  @media ${theme.media.tablet} {
    padding: 85px 35px;
  }

  @media ${theme.media.mobile} {
    padding: 65px 25px;

    &::before {
      top: 17px;
      left: 22px;
      width: 27px;
      height: 21px;
    }

    &::after {
      bottom: 17px;
      right: 22px;
      width: 27px;
      height: 21px;
    }
  }
`

const AvatarWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 98px;
  height: 98px;
  animation: ${fadeIn} 0.4s ease-out forwards;
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

const ReviewText = styled.blockquote`
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 18px;
  color: ${theme.colors.fontDescription};
`

const AuthorInfo = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AuthorName = styled.cite`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  font-size: 18px;
  font-style: normal;
  color: ${theme.colors.fontText};
`

const AuthorRole = styled.span`
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  color: ${theme.colors.fontDescription};
`

const ArrowWrapper = styled.div`
  display: inline-flex;
  gap: 5px;
  position: absolute;
  left: 5%;
  bottom: 0;
  transform: translate(-50%, -50%);

  @media ${theme.media.desktop} {
    position: static;
    transform: none;
    justify-content: center;
    margin-top: 10px;
  }
`

const ArrowButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.accent};
  position: relative;
  width: 92px;
  height: 47px;
  transition: ${theme.animations.transition};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 25px;
    background-image: url('/images/arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% auto;
  }

  &:first-child::before {
    transform: translate(-50%, -50%) rotate(180deg);
  }

  &:hover,
  &:focus-visible {
    filter: brightness(0.95);
    box-shadow: 0 4px 12px rgba(253, 196, 53, 0.3);
  }

  &:first-child:hover,
  &:first-child:focus-visible {
    transform: translateX(-6px);
  }

  &:last-child:hover,
  &:last-child:focus-visible {
    transform: translateX(6px);
  }

  &:active {
    filter: brightness(0.85);

    &:first-child {
      transform: translateX(-4px) scale(0.95);
    }

    &:last-child {
      transform: translateX(4px) scale(0.95);
    }
  }
`

export const S = {
  Slider,
  Slide,
  AvatarWrapper,
  Avatar,
  ReviewText,
  AuthorInfo,
  AuthorName,
  AuthorRole,
  ArrowWrapper,
  ArrowButton
}