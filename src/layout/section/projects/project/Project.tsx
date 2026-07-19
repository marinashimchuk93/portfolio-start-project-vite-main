import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {Link} from "../../../../components/Link.ts";
import {S} from "./../Projects_Styles.ts";

type ProjectProps = {
  title: string
  description: string
  src: string
  isEven?: boolean
}


export const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  const {isEven} = props;

  return (
    <S.StyledProject>
      <FlexWrapper
        direction={isEven ? "row-reverse" : "row"}
        tabletDirection={"column-reverse"}
      >
        <S.TextWrapper isEven={isEven}>
          <S.TitleProject>{props.title}</S.TitleProject>
          <S.DescriptionProject>{props.description}</S.DescriptionProject>
          <Link
            href="/"
            border={'1px solid #25282b'}
            borderRadius={'24px'}
            borderHover={'1px solid transparent'}
            aria-label={`View details for project: ${props.title}`}
          >View Project</Link>
        </S.TextWrapper>
        <S.ImageWrapper>
          <S.Image
            src={props.src}
            alt={`Screenshot or preview of the ${props.title} project`}
          />
        </S.ImageWrapper>
      </FlexWrapper>
    </S.StyledProject>
  );
};
