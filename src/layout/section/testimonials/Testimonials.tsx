import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme.tsx";

export const Testimonials: React.FC = () => {
  return (
    <StyleTestimonials id={'testimonials'}>
      <Container>
        <SectionTitle>Testimonials</SectionTitle>
        <FlexWrapper
          direction={'column'}
          align={'center'}
        >
          <Slider />
        </FlexWrapper>
      </Container>
    </StyleTestimonials>
  );
};

const StyleTestimonials = styled.section`
  padding-block: 72px;

  @media ${theme.media.mobile} {
    padding-block: 40px;
  }

  h2 {
    margin-bottom: 130px;

    @media ${theme.media.mobile} {
      margin-bottom: 90px;
    }
  }
`
