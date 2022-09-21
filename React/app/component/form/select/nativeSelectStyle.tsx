import styled from '@emotion/styled';
import theme from '../../styles/theme';

export type SelectWidthType = string | number | undefined;
export type FormScalesType = 'small' | 'medium' | 'large' | 'big';

export const div = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;

  &:before {
    content: "▼";
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`;
export const select = styled.select<{
  invalid: boolean;
  width: SelectWidthType;
  scale: FormScalesType;
  disabled: boolean;
}>`
  appearance: none;
  width: 100%;
  
  border: 1px solid ${({ invalid }) => (invalid ? theme.color.danger : theme.color.blue100)};
  border-radius: 5px;

  ${({ disabled }) => (disabled === false
    ? `&:hover {
      outline: 1px solid ${theme.color.blue100};
    }
    &:focus {
      outline: 2px solid ${theme.color.blue200};
    }`
    : null)}
  
  ${({ scale }) => (scale && theme.formScales[scale] ? theme.formScales[scale] : theme.formScales.medium)};
  ${({ width }) => {
    if (width) {
      return (
        `width: ${typeof (width) === 'number' ? `${width}px;` : width} !important`
      );
    }
    return null;
  }};
`;
export const option = styled.option`
  appearance: none;
`;
export const optGroup = styled.optgroup`

`;
