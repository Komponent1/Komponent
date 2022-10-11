import styled from '@emotion/styled';
import theme from '../styles/theme';

export type AvatarScale = 'small' | 'medium' | 'large' | 'big' | number;
export type AvatarDesign = 'square' | 'circle' | 'round';
export type AvatarColor = string;

const Scale = {
  small: 24,
  medium: 48,
  large: 96,
  big: 192,
};
const Design = {
  square: 0,
  circle: 50,
  round: 15,
};
export const avatar = styled.div<{
  scale: AvatarScale;
  design: AvatarDesign;
  color: AvatarColor;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: ${({ scale }) => (typeof (scale) === 'number' ? scale : Scale[scale])}px;
  height: ${({ scale }) => (typeof (scale) === 'number' ? scale : Scale[scale])}px;
  border-radius: ${({ design }) => Design[design]}%;

  position: relative;
  
  background: ${({ color }) => (Object.keys(theme.color).includes(color) ? theme.color[color] : color)};
  color: white;
  font-size: ${({ scale }) => (typeof (scale) === 'number' ? scale * 0.6 : Scale[scale] * 0.6)}px;
`;
export const img = styled.img<{
  error: boolean
}>`
  width: 100%;
  height: 100%;

  display: ${({ error }) => (!error ? 'inline-block' : 'none')};

  position: absolute;
  top: 0;
  left: 0;
`;
