import styled from '@emotion/styled';
import theme from '../styles/theme';

export type TipPosition = 'left' | 'right' | 'top' | 'bottom';
export type TipScale = 'small' | 'medium' | 'large' | 'big';

export const Scale = {
  small: {
    border: 5,
    padding: '3px 6px',
    fontSize: 12,
  },
  medium: {
    border: 5,
    padding: '4px 8px',
    fontSize: 16,
  },
  large: {
    border: 5,
    padding: '6px 12px',
    fontSize: 20,
  },
  big: {
    border: 5,
    padding: '8px 16px',
    fontSize: 24,
  },
};
export const Position = (scale: TipScale) => ({
  left: `
    border-left: ${Scale[scale].border}px solid ${theme.color.black700};
    border-top: ${Scale[scale].border}px solid transparent;
    border-bottom: ${Scale[scale].border}px solid transparent;
    border-right: 0px solid transparent;
    
    right: ${-Scale[scale].border}px;
    top: 50%;
    transform: translateY(-50%);
  `,
  right: `
    border-right: ${Scale[scale].border}px solid ${theme.color.black700};
    border-top: ${Scale[scale].border}px solid transparent;
    border-bottom: ${Scale[scale].border}px solid transparent;
    border-left: 0px solid transparent;
    
    left: ${-Scale[scale].border}px;
    top: 50%;
    transform: translateY(-50%);
  `,
  top: `
    border-top: ${Scale[scale].border}px solid ${theme.color.black700};
    border-left: ${Scale[scale].border}px solid transparent;
    border-right: ${Scale[scale].border}px solid transparent;
    border-bottom: 0px solid transparent;
    bottom: ${-Scale[scale].border}px;
    left: 50%;
    transform: translateX(-50%);
  `,
  bottom: `
    border-bottom: ${Scale[scale].border}px solid ${theme.color.black700};
    border-left: ${Scale[scale].border}px solid transparent;
    border-right: ${Scale[scale].border}px solid transparent;
    border-top: 0px solid transparent;
    top: -${Scale[scale].border}px;
    left: 50%;
    transform: translateX(-50%);
  `,
});

export const tip = styled.div<{
  position?: TipPosition | undefined;
  scale: TipScale;
  left: number;
  top: number;
  opacity?: boolean;
}>`
  background: ${theme.color.black700};
  color: white;

  border-radius: 5px;
  padding: ${({ scale }) => Scale[scale].padding};
  font-size: ${({ scale }) => Scale[scale].fontSize}px;

  ${({ position, top, left }) => (position && top && left ? `
    position: absolute;
    top: ${top}px;
    left: ${left}px;
  ` : 'position: relative')};


  opacity: ${({ opacity }) => (opacity ? 1 : 0)};
  transition: opacity 0.2s ease-out;

  &:after {
    content: "";
    position: absolute;
    ${({ scale, position }) => Position(scale)[position || 'top']};
  }
`;
export const tooltip = styled.div`
  display: inline-block;
`;
