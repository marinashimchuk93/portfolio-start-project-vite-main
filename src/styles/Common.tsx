import {theme} from "./Theme.tsx";

type FontProps = {
  family?: string,
  weight?: number,
  color?: string,
  Fmin?: number,
  Fmax?: number,
}

export const font = ({
                       family,
                       weight,
                       color,
                       Fmin,
                       Fmax
                     }: FontProps) => `
  font-family: ${family || 'Nunito'};
  font-weight: ${weight || 400};
  color: ${color || theme.colors.fontText};
  font-size: clamp(
    ${Fmin}px, 
    calc((100vw - 375px) / (1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px), 
    ${Fmax}px
  );
`