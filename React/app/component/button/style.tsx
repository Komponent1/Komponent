import styled from '@emotion/styled';
import theme from '../styles/theme';

export type ButtonColor = 'normal' | 'alert' | 'semantic';
export type ButtonSize = 'small' | 'medium' | 'large' | 'big' | 'wide';
export type ButtonCorner = 'round' | 'square';
export type ButtonDesign = 'outline' | 'text' | 'block';
const sizes = {
  small: `
    font-size: ${theme.size.xs}px;
    padding: ${theme.padding.xs - 1}px ${(theme.padding.xs - 1) * 2}px;
  `,
  medium: `
    font-size: ${theme.size.m}px;
    padding: ${theme.padding.m - 1}px ${(theme.padding.m - 1) * 2}px;
  `,
  large: `
    font-size: ${theme.size.xl}px;
    padding: ${theme.padding.xl - 1}px ${(theme.padding.xl - 1) * 2}px;
  `,
  big: `
    font-size: ${theme.size.xxxl}px;
    padding: ${(theme.padding.xxxl - 1)}px ${(theme.padding.xxxl - 1) * 2}px;
  `,
  wide: `
    width: 100%;
    font-size: ${theme.size.xxxl}px;
    padding: ${theme.padding.xxxl - 1}px;
  `,
};
function createLayout(color: ButtonColor = 'normal', design: ButtonDesign = 'block'): string {
  const colors = {
    normal: {
      default: theme.color.blue500,
      hover: theme.color.blue600,
      active: theme.color.blue700,
      disabled: theme.color.blue200,
    },
    alert: {
      default: theme.color.red500,
      hover: theme.color.red600,
      active: theme.color.red700,
      disabled: theme.color.red200,
    },
    semantic: {
      default: theme.color.purple500,
      hover: theme.color.purple600,
      active: theme.color.purple700,
      disabled: theme.color.purple200,
    },
  };

  switch (design) {
    case 'outline':
      return `
        color: ${colors[color].default};
        background: white;        
        border: 1px solid ${colors[color].default};
        &:hover {
          background: ${theme.color.white300};
        }
        &:active {
          background: ${theme.color.white400};
        }
        &:disabled {
          color: ${colors[color].disabled};
        }
      `;
    case 'text':
      return `
        color: ${colors[color].default};
        background: ${theme.color.white};        
        border: 1px solid ${theme.color.white};
        &:hover {
          background: ${theme.color.white300};
          border: 1px solid ${theme.color.white300};
        }
        &:active {
          background: ${theme.color.white400};
          border: 1px solid ${theme.color.white400};
        }
        &:disabled {
          color: ${colors[color].disabled};
        }
      `;
    default:
      return `
        color: ${theme.color.white};
        background: ${colors[color].default};
        border: 1px solid ${colors[color].default};
        &:hover {
          background: ${colors[color].hover};
          border: 1px solid ${colors[color].hover};
        }
        &:active {
          background: ${colors[color].active};
          border: 1px solid ${colors[color].active};
        }
        &:disabled {
          background: ${colors[color].disabled};
          border: 1px solid ${colors[color].disabled};
        }
      `;
  }
}
export const button = styled.button<{
  disabled?: boolean;
  size?: ButtonSize;
  corner?: ButtonCorner;
  color?: ButtonColor;
  design?: ButtonDesign;
}>`
  outline: none;
  border: none;
  transition: background 0.2s ease-out;
  
  ${({ color, design }) => createLayout(color, design)};
  
  ${({ size }) => (size && sizes[size] ? sizes[size] : sizes.medium)};
  border-radius: ${({ corner }) => ((corner && corner === 'round') ? '300px' : '6px')};
`;
