import React from 'react';
import {S} from './../HeaderMenu_Styles.ts';
import {Menu} from "../menu/Menu.tsx";


export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu aria-label="Main navigation">
      <Menu />
    </S.DesktopMenu>
  );
};




