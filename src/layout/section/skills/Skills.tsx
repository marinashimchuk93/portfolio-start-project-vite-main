import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Skills_Styles.ts";
import {Fade} from "react-awesome-reveal";

const skillsData = [
  {iconId: 'vsCode', title: 'VS Code'},
  {iconId: 'javaScript', title: 'JavaScript'},
  {iconId: 'css', title: 'CSS3'},
  {iconId: 'html', title: 'HTML5'},
  {iconId: 'superman', title: 'Superman (Advanced Skills)'},
  {
    iconId: 'redux',
    title: 'Redux',
    width: '105',
    height: '100',
    viewBox: '0 0 105 100'
  },
  {
    iconId: 'gitHub',
    title: 'GitHub',
    width: '88',
    height: '88',
    viewBox: '0 0 88 88'
  },
  {
    iconId: 'git',
    title: 'Git',
    width: '105',
    height: '105',
    viewBox: '0 0 105 105'
  },
  {
    iconId: 'react',
    title: 'React',
    width: '113',
    height: '101',
    viewBox: '0 0 113 101'
  },
  {
    iconId: 'sass',
    title: 'Sass / SCSS',
    width: '117',
    height: '87',
    viewBox: '0 0 117 87'
  },
  {
    iconId: 'bootstrap',
    title: 'Bootstrap',
    width: '88',
    height: '88',
    viewBox: '0 0 88 88'
  },
  {
    iconId: 'tailwindCss',
    title: 'Tailwind CSS',
    width: '131',
    height: '131',
    viewBox: '0 0 131 131'
  },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills aria-labelledby="skills-title">
      <Container>
        <SectionTitle id="skills-title">Skills</SectionTitle>
        <S.GridWrapper>
          <Fade
            cascade={true}
            damping={0.2}
          >
            {skillsData.map((skill, index) => {
              return <S.SkillItem key={index}>
                <Icon
                  iconId={skill.iconId}
                  width={skill.width}
                  height={skill.height}
                  viewBox={skill.viewBox}
                  aria-hidden="true"
                />
                <S.ScreenReaderText>{skill.title}</S.ScreenReaderText>
              </S.SkillItem>
            })}
          </Fade>
        </S.GridWrapper>
      </Container>
    </S.Skills>
  );
};



