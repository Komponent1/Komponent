import styled from '@emotion/styled';
import theme from '../../styles/theme';

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

export const div = styled.div<{
  scale: FormScalesType;
}>`
  display: inline-block;
  cursor: pointer;
  font-size: ${({ scale }) => selectScale[scale].fontSize}px;
  word-break: keep-all;
`;
export const select = styled.div<{
  disabled: boolean;
  invalid: boolean;
  scale: FormScalesType;
  width: SelectWidthType;
  open: boolean;
  design: SelectDesign;
}>`
  overflow-x: hidden;
  position: relative;

  border${({ design }) => (design === 'underline' ? '-bottom' : null)}: 1px solid ${({ invalid, disabled }) => (invalid && !disabled ? theme.color.danger : theme.color.white400)};
  ${({ design }) => (design === 'underline' ? null : 'border-radius: 5px')};

  &:before {
    content: "▼";
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }

  ${({ disabled, open, design }) => (disabled === false
    ? `&:hover {
      border${design === 'underline' ? '-bottom' : ''}: 1px solid ${theme.color.blue300};
    }
    ${(open && design === 'normal' ? `outline: 1px solid ${theme.color.blue300}; !important` : '')};
    ${(open && design === 'underline' ? `background: ${theme.color.white400}` : '')};`
    : 'opacity: 0.7;color: #aaaaaa;'
  )}
  transition: background 0.3s ease-out, border 0.3s ease-out;

  width: ${({ scale, width }) => setWidth(scale, width, true)};
  padding: ${({ scale }) => `${selectScale[scale].paddingTB}px ${selectScale[scale].paddingRL}px`};
`;
export const optionBox = styled.ul<{
  open: boolean;
  width: SelectWidthType;
  scale: FormScalesType;
  transition: number;
}>`
  list-style-type: none;
  margin: 0;
  border-radius: 5px;
  position: absolute;
  top: auto;
  z-index: 999;

  transition: transform 0.1s ease-in, opacity 0.1s ease-in;
  opacity: ${({ transition }) => (transition === 0.5 ? 0 : 1)};
  transform: scale(${({ transition }) => transition});
  transform-origin: top;

  display: ${({ open }) => (open ? 'block' : 'none')};
  ${theme.etcStyle.popupShadow};
  
  padding: ${({ scale }) => selectScale[scale].paddingTB}px 0;
  width: ${({ width, scale }) => setWidth(scale, width, false)};
`;
export const option = styled.li<{
  scale: FormScalesType
}>`
  padding: 0 ${({ scale }) => selectScale[scale].paddingRL}px;
  &:hover {
    background: ${theme.color.white300};
  }
`;
