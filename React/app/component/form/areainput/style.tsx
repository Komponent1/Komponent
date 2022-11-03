import styled from '@emotion/styled';
import theme from '../../styles/theme';

export type FormScalesType = 'small' | 'medium' | 'large' | 'big';
export type SelectDesign = 'normal' | 'underline';
const setDesign = (design: SelectDesign) => {
  if (design === 'normal') {
    return `
      border: 2px solid ${theme.color.blue100};
      border-radius: 5px;

      &:focus {
        outline: 2px solid ${theme.color.blue100}
      }
    `;
  }
  return `
    background: ${theme.color.white200};
    border-bottom: 2px solid ${theme.color.blue100};
    border-radius: 5px 5px 0 0;

    &:focus {
      background: ${theme.color.white300} !important
    }

    &:hover {
      background: ${theme.color.white300};
    }
  `;
};
const setScale = (scale: FormScalesType, width: number | string) => {
  if (scale === 'small') {
    return `
      font-size: ${theme.size.s}px;
      padding: ${theme.size.xxs}px ${theme.size.xxs}px;
      width: calc(${(typeof (width) === 'number' ? `${width}px` : width)} - ${theme.size.xxs * 2 + 4}px);
    `;
  }
  if (scale === 'medium') {
    return `
      font-size: ${theme.size.m}px;
      padding: ${theme.size.xxs}px ${theme.size.xxs}px;
      width: calc(${(typeof (width) === 'number' ? `${width}px` : width)} - ${theme.size.xxs * 2 + 4}px);
    `;
  }
  if (scale === 'large') {
    return `
      font-size: ${theme.size.l}px;
      padding: ${theme.size.xs}px ${theme.size.xs}px;
      width: calc(${(typeof (width) === 'number' ? `${width}px` : width)} - ${theme.size.xs * 2 + 4}px);
    `;
  }
  return `
    font-size: ${theme.size.xl}px;
    padding: ${theme.size.xs}px ${theme.size.xs}px;
    width: calc(${(typeof (width) === 'number' ? `${width}px` : width)} - ${theme.size.xs * 2 + 4}px);
  `;
};
export const textarea = styled.textarea<{
  width: number | string;
  design: SelectDesign;
  scale: FormScalesType;
}>`
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }

  ${({ scale, width }) => setScale(scale, width)};
  ${({ design }) => setDesign(design)};
`;
