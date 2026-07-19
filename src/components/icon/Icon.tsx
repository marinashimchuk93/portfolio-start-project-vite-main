import React from 'react';
import svgSprite from '../../assets/icons/svg-sprite.svg'

type IconProps = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      width={props.width || '120'}
      height={props.height || "120"}
      viewBox={props.viewBox || "0 0 120 120"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${svgSprite}#${props.iconId}`} />
    </svg>
  );
};

