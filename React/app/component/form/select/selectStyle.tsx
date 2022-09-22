import styled from '@emotion/styled';
import theme from '../../styles/theme';

export type SelectWidthType = string | number | undefined;
export type FormScalesType = 'small' | 'medium' | 'large' | 'big';

export const div = styled.div`
  display: inline-block;
  cursor: pointer;
`;
export const select = styled.div<{
  disabled: boolean;
  invalid: boolean;
  scale: FormScalesType;
  width: SelectWidthType;
  open: boolean;
}>`
  position: relative;

  border: 1px solid ${({ invalid, disabled }) => (invalid && !disabled ? theme.color.danger : theme.color.blue100)};
  border-radius: 5px;

  &:before {
    content: "▼";
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }

  ${({ disabled, open }) => (disabled === false
    ? `&:hover {
      outline: 1px solid ${theme.color.blue100};
    }
    ${(open ? `outline: 2px solid ${theme.color.blue200}` : null)}; !important`
    : 'opacity: 0.7;color: #aaaaaa;'
  )}

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
export const optionBox = styled.ul<{
  open: boolean;
  width: SelectWidthType;
  scale: FormScalesType;
}>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  position: absolute;
  top: auto;
  z-index: 999;

  display: ${({ open }) => (open ? 'block' : 'none')};
  ${theme.etcStyle.floatingShadow};
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
export const option = styled.li`

`;
