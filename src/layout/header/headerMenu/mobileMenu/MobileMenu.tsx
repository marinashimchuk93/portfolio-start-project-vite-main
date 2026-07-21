import React, {useState} from 'react';
import {S} from "./../HeaderMenu_Styles.ts";
import {Menu} from "../menu/Menu.tsx";


export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);


  return (
    <S.MobileMenu aria-label="Main navigation">
      <S.BurgerButton
        title={"Open menu"}
        isOpen={menuIsOpen}
        onClick={toggleMenu}
      >
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => setMenuIsOpen(false)}
      >
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
