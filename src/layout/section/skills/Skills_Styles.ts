import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

const Skills = styled.section`
  padding-block: 72px;

  @media ${theme.media.mobile} {
    padding-block: 40px;
  }
`

const GridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 84px 96px;

  @media ${theme.media.mobile} {
    gap: 55px 75px;
  }
`

const SkillItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ScreenReaderText = styled.span`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  border: 0 !important;
  padding: 0 !important;
  white-space: nowrap !important;
  clip-path: inset(100%) !important;
  clip: rect(0 0 0 0) !important;
  overflow: hidden !important;
`

export const S = {
  Skills,
  GridWrapper,
  SkillItem,
  ScreenReaderText,
}