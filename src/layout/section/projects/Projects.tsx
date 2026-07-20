import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu, TabsStatusType} from "./tabmenu/TabMenu.tsx";
import {Project} from "./project/Project.tsx";
import projOne from "../../../assets/images/projects-photo-1.png";
import projTwo from "../../../assets/images/projects-photo-2.png";
import projThree from "../../../assets/images/projects-photo-3.png";
import {Container} from "../../../components/Container.ts";
import {S} from "./Projects_Styles.ts";
import {AnimatePresence, motion} from "motion/react";

const tabsItems: Array<{
  title: string,
  status: TabsStatusType
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing Page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "SPA",
    status: "spa",
  },
]

const projectsData = [
  {
    id: 1,
    title: 'Project Name',
    description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    src: projOne,
    type: 'spa',
  },
  {
    id: 2,
    title: 'Project Name',
    description: 'What was your role, your deliverables, if the project was personal, freelancing.',
    src: projTwo,
    type: 'react',
  },
  {
    id: 3,
    title: 'Project Name',
    description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.',
    src: projThree,
    type: 'landing',
  }
]

export const Projects: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all")

  const filteredProjects = currentFilterStatus === "all"
    ? projectsData
    : projectsData.filter((project) => project.type === currentFilterStatus);

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value)
  }

  return (
    <S.Projects id="projects">
      <Container>
        <SectionTitle id='projects'>Projects</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <S.ProjectsWrapper
          direction={'column'}
          gap={'80px'}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 !== 0;
              return (
                <motion.div
                  layout={true}
                  data-even={isEven}
                  initial={{x: isEven ? 300 : -300, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  exit={{x: isEven ? -300 : 300, opacity: 0}}
                  transition={{type: "spring", stiffness: 300, damping: 30}}
                  key={project.id}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <Project
                    title={project.title}
                    description={project.description}
                    src={project.src}
                    isEven={isEven}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </S.ProjectsWrapper>
      </Container>
    </S.Projects>
  );
};



