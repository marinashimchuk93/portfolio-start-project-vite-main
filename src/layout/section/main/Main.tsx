import React from 'react';
import Typewriter from 'typewriter-effect';
import mainPhoto from '../../../assets/images/main-photo.png';
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {Link} from "../../../components/Link.ts";
import {scroller} from "react-scroll";
import {S} from "./Main_Styles.ts";

export const Main: React.FC = () => {
  return (
    <S.Main id="about">
      <Container>
        <FlexWrapper
          desktopDirection={"column-reverse"}
        >
          <S.TextWrapper
            direction={'column'}
            align={'flex-start'}
          >
            <S.MainTitle>
              <p>Software Developer</p>
              <Typewriter
                options={{
                  strings: ['Software Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
            <S.Name>Hello, my name is Vahid Navazan</S.Name>
            <S.Description>
              Short text with details about you, what you do or your professional career. You can add more information on the about page.
            </S.Description>
            <FlexWrapper
              align={'center'}
              justify={'flex-start'}
              gap={'12px'}
            >
              <Link
                onClick={() => {
                  scroller.scrollTo("projects", {
                    duration: 500,
                    smooth: true,
                  });
                }}
                href="#projects"
                border={'2px solid #25282b'}
                borderRadius={'8px'}
                borderHover={'2px solid transparent'}
              >Projects</Link>
              <Link
                href="/"
                target="_blank"
                border={'2px solid #25282b'}
                borderRadius={'8px'}
                borderHover={'2px solid transparent'}
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                LinkedIn
              </Link>
            </FlexWrapper>
          </S.TextWrapper>
          <S.PhotoWrapper>
            <S.Photo
              src={mainPhoto}
              alt="Vahid Navazan"
            />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};


