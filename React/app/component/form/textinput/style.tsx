import styled from '@emotion/styled';
import theme from '../../styles/theme';

export type TextInputScale = 'small' | 'medium' | 'large' | 'big';
const scales = {
  small: `
    width: calc(100% - ${(theme.padding.xs - 1) * 4}px);
    font-size: ${theme.size.xs}px;
    padding: ${theme.padding.xs - 1}px ${(theme.padding.xs - 1) * 2}px;
  `,
  medium: `
    width: calc(100% - ${(theme.padding.m - 1) * 4}px);
    font-size: ${theme.size.m}px;
    padding: ${theme.padding.m - 1}px ${(theme.padding.m - 1) * 2}px;
  `,
  large: `
    width: calc(100% - ${(theme.padding.xl - 1) * 4}px);
    font-size: ${theme.size.xl}px;
    padding: ${theme.padding.xl - 1}px ${(theme.padding.xl - 1) * 2}px;
  `,
  big: `
    width: calc(100% - ${(theme.padding.xxxl - 1) * 4}px);
    font-size: ${theme.size.xxxl}px;
    padding: ${theme.padding.xxxl - 1}px ${(theme.padding.xxxl - 1) * 2}px;
  `,
};
export const Input = styled.input<{
  scale?: TextInputScale;
  invalid: boolean;
}>`
  border: 1px solid ${({ invalid }) => (invalid ? theme.color.danger : theme.color.blue100)};
  border-radius: 2px;
  outline: none;

  ${({ scale }) => (scale && scales[scale] ? scales[scale] : scales.medium)};

  &:focus {
    outline: 1px solid ${theme.color.blue100};
  }
`;
