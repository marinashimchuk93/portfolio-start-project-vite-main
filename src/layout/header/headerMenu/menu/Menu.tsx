import React from 'react';
import {S} from './../HeaderMenu_Styles';


const items = [
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Projects',
    href: 'projects',
  },
  {
    title: 'Testimonials',
    href: 'testimonials',
  },
  {
    title: 'Contact',
    href: 'contact',
  },
]

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => {

        return <li key={index}>
          <S.NavLink
            to={item.href}
            smooth={true}
          >{item.title}</S.NavLink>
        </li>
      })}
    </ul>
  );
};

