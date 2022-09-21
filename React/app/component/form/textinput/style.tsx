import styled from '@emotion/styled';
import theme from '../../styles/theme';

export type TextInputScale = 'small' | 'medium' | 'large' | 'big';

export const Input = styled.input<{
  scale?: TextInputScale;
  invalid: boolean;
  disabled: boolean;
}>`
  border: 1px solid ${({ invalid }) => (invalid ? theme.color.danger : theme.color.blue100)};
  border-radius: 5px;
  outline: none;

  ${({ scale }) => (scale && theme.formScales[scale] ? theme.formScales[scale] : theme.formScales.medium)};

  ${({ disabled }) => (disabled === false
    ? `&:focus {
      outline: 1px solid ${theme.color.blue100};
    }`
    : null)}
`;
