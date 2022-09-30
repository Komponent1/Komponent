import styled from '@emotion/styled';
import theme from '../../styles/theme';

export type TextInputScale = 'small' | 'medium' | 'large' | 'big';
export type SelectWidthType = string | number | undefined;
export type FormScalesType = 'small' | 'medium' | 'large' | 'big';
export type SelectDesign = 'normal' | 'underline';

const selectScale = {
  small: {
    fontSize: theme.size.xs,
    paddingTB: theme.padding.xs - 1,
    paddingRL: (theme.padding.xs - 1) * 2,
    width: 120,
  },
  medium: {
    fontSize: theme.size.m,
    paddingTB: theme.padding.m - 1,
    paddingRL: (theme.padding.m - 1) * 2,
    width: 136,
  },
  large: {
    fontSize: theme.size.xl,
    paddingTB: theme.padding.xl - 1,
    paddingRL: (theme.padding.xl - 1) * 2,
    width: 152,
  },
  big: {
    fontSize: theme.size.xxxl,
    paddingTB: theme.padding.xxxl - 1,
    paddingRL: (theme.padding.xxxl - 1) * 2,
    width: 168,
  },
};
const setWidth = (scale: FormScalesType, width?: SelectWidthType, pad?: boolean) => {
  if (width) {
    if (pad) {
      return (typeof (width) !== 'number'
        ? `calc(${width} - ${selectScale[scale].paddingRL * 2}px)`
        : `${width - (selectScale[scale].paddingRL * 2)}px`);
    }
    return (typeof (width) !== 'number' ? width : `${width}px`);
  }
  if (pad) {
    return `${selectScale[scale].width - (selectScale[scale].paddingRL * 2)}px`;
  }
  return `${selectScale[scale].width}px`;
};

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
export const autoTextInput = styled.div`
  position: relative;
`;
export const optionBox = styled.ul<{
  open: boolean;
  scale: FormScalesType;
  width: number;
}>`
  list-style-type: none;
  margin: 0;
  border-radius: 5px;
  position: absolute;
  top: auto;
  background: white;
  z-index: 999;

  display: ${({ open }) => (open ? 'block' : 'none')};
  ${theme.etcStyle.popupShadow};
  
  padding: ${({ scale }) => selectScale[scale].paddingTB}px 0;
  width: ${({ width }) => width}px;
`;
export const option = styled.li<{
  scale: FormScalesType
}>`
  padding: 0 ${({ scale }) => selectScale[scale].paddingRL}px;
  &:hover {
    background: ${theme.color.white300};
  }
`;
