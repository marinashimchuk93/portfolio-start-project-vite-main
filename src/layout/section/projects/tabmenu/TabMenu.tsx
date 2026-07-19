import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabMenuProps = {
  tabsItems: Array<{
    title: string,
    status: TabsStatusType
  }>,
  changeFilterStatus: (value: TabsStatusType) => void,
  currentFilterStatus: string
}

export const TabMenu: React.FC<TabMenuProps> = (props: TabMenuProps) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((item, index) => {
          return <li key={index}>
            <TabLink
              as={"button"}
              active={props.currentFilterStatus === item.status}
              onClick={() => {
                props.changeFilterStatus(item.status)
              }}
            >{item.title}</TabLink>
          </li>
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 24px;

  ul {
    display: flex;
    justify-content: center;
    gap: 30px;

    @media ${theme.media.tablet} {
      gap: 10px;
    }
  }
`

const TabLink = styled.a<{ active?: boolean }>`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.fontText};
  padding: 10px;
  border: none;
  background-color: transparent;

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
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }

  ${props => props.active && css`
    &::after {
      transform: scaleX(1);
    }
  `}
`;

