import React from 'react';
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Container} from "../../components/Container.ts";
import {S} from "./Footer_Styles.ts";

const socialItemData = [
  {
    href: '/',
    ariaLabel: "Instagram profile (opens in a new tab)",
    iconId: 'instagram',
    width: '38',
    height: '38',
    viewBox: '0 0 38 38',
  },
  {
    href: '/',
    ariaLabel: "LinkedIn profile (opens in a new tab)",
    iconId: 'linkedIn',
    width: '38',
    height: '38',
    viewBox: '0 0 38 38',
  },
  {
    href: 'mailto:example@mail.com',
    ariaLabel: "Send email",
    iconId: 'email',
    width: '42',
    height: '32',
    viewBox: '0 0 42 32',
  }
]


export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper
          direction={"column"}
          align={"center"}
        >
          <S.SocialList aria-label="Social media links">
            {socialItemData.map((item, index) => {
              return <li key={index}>
                <S.SocialLink
                  href={item.href}
                  target="_blank"
                  aria-label={item.ariaLabel}
                >
                  <Icon
                    iconId={item.iconId}
                    width={item.width}
                    height={item.height}
                    viewBox={item.viewBox}
                    aria-hidden="true"
                  />
                </S.SocialLink>
              </li>
            })}
          </S.SocialList>
          <S.Copyright>Madelyn Torff 2021 </S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};


