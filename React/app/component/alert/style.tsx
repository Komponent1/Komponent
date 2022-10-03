import styled from '@emotion/styled';
import theme from '../styles/theme';

export type AlertType = 'warning' | 'danger';
export type AlertScale = 'small' | 'medium' | 'large' | 'big';

const design = {
  warning: `
    background: ${theme.color.yellow100};
    color: ${theme.color.yellow900};
    border: 1px solid ${theme.color.yellow900};
  `,
  danger: `
    background: ${theme.color.red100};
    color: ${theme.color.red700};
    border: 1px solid ${theme.color.red700};
  `,
};
const Scale = {
  small: `
    min-width: 120px;
  `,
  medium: `
    min-width: 144px;
  `,
  large: `
    min-width: 168px;
  `,
  big: `
    min-width: 192px;
  `,
};
export const alert = styled.div<{
  type: AlertType;
  scale: AlertScale;
}>`
  border-radius: 4px;
  ${({ type }) => design[type]};
  ${({ scale }) => theme.formScales[scale]};
  width: auto;
  display: inline-flex;
  align-items: center;
  ${({ scale }) => Scale[scale]};
  font-weight: 500;
  margin: 6px;

  &>svg {
    margin-right: 8px;
  }
`;
