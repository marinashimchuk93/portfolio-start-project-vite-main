import React, {useState} from 'react';
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import avatarOne from "../../assets/images/avatar-1.png";
import avatarTwo from "../../assets/images/avatar-2.jpg";
import avatarThree from "../../assets/images/avatar-3.jpg";
import {FlexWrapper} from "../FlexWrapper.ts";
import {S} from "./Slider_Styles.ts";

const testimonials = [
  {
    id: 1,
    avatar: avatarOne,
    text: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "Karmani",
    role: "Founder and CEO of Karmani"
  },
  {
    id: 2,
    avatar: avatarTwo,
    text: "Another testimonial text here. It works beautifully with the slider component.",
    name: "John Doe",
    role: "CTO of Company"
  },
  {
    id: 3,
    avatar: avatarThree,
    text: "Third testimonial text here. It works beautifully with the slider component.",
    name: "Jane Smith",
    role: "Designer"
  }
];

export const Slider: React.FC = () => {
  //  Создаем стейт для отслеживания текущего слайда
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    // Обновляем стейт при смене слайда
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Получаем данные активного в данный момент слайда
  const activeSlide = testimonials[currentSlide] || testimonials[0];

  return (
    <S.Slider>
      <S.AvatarWrapper key={currentSlide}>
        <S.Avatar
          src={activeSlide.avatar}
          alt={`${activeSlide.name}, ${activeSlide.role}`}
        />
      </S.AvatarWrapper>

      <div
        ref={sliderRef}
        className="keen-slider"
      >
        {testimonials.map((slide) => (
          <S.Slide
            key={slide.id}
            className="keen-slider__slide"
          >
            <FlexWrapper
              direction={'column'}
              align={'center'}
            >
              <S.ReviewText>{slide.text}</S.ReviewText>
              <S.AuthorInfo>
                <S.AuthorName>{slide.name}</S.AuthorName>
                <S.AuthorRole>{slide.role}</S.AuthorRole>
              </S.AuthorInfo>
            </FlexWrapper>
          </S.Slide>
        ))}
      </div>

      <S.ArrowWrapper>
        <S.ArrowButton
          aria-label="Previous slide"
          onClick={() => instanceRef.current?.prev()}
        />
        <S.ArrowButton
          aria-label="Next slide"
          onClick={() => instanceRef.current?.next()}
        />
      </S.ArrowWrapper>
    </S.Slider>
  );
};
