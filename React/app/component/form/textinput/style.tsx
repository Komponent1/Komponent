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
const setDesign = (design: SelectDesign, invalid: boolean) => {
  if (design === 'normal') {
    return `
      border: 1px solid ${invalid ? theme.color.danger : theme.color.blue100};
      border-radius: 5px;

      &:focus {
        outline: 1px solid ${theme.color.blue100}
      }
    `;
  }
  return `
    border-bottom: 2px solid ${invalid ? theme.color.danger : theme.color.blue100};
    border-radius: 5px 5px 0 0;

    &:focus {
      background: ${theme.color.white200} !important
    }

    &:hover {
      background: ${theme.color.white200};
    }
  `;
};
export const Input = styled.input<{
  scale?: TextInputScale;
  invalid: boolean;
  disabled: boolean;
  design: SelectDesign;
}>`
  border-radius: 5px;
  outline: none;
  border: none;

  ${({ scale }) => (scale && theme.formScales[scale] ? theme.formScales[scale] : theme.formScales.medium)};
  ${({ design, invalid }) => setDesign(design, invalid)}
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
