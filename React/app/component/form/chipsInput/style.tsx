import styled from '@emotion/styled';
import theme from '../../styles/theme';

export type ChipsInputScale = 'small' | 'medium' | 'large' | 'big';
export type SelectWidthType = string | number | undefined;
export type ChipsInputDesign = 'normal' | 'underline';
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

const setDesign = (design: ChipsInputDesign, invalid: boolean, focus: boolean) => {
  if (design === 'normal') {
    return `
      border: 1px solid ${invalid ? theme.color.danger : theme.color.blue100};
      border-radius: 5px;

      ${focus ? `outline: 1px solid ${theme.color.blue100}` : null};
    `;
  }
  return `
    border-bottom: 2px solid ${invalid ? theme.color.danger : theme.color.blue100};
    border-radius: 5px 5px 0 0;
    ${focus ? `background: ${theme.color.white200} !important` : null};

    &:hover {
      background: ${theme.color.white200};
    }
  `;
};

export const chipsInput = styled.div<{
  invalid: boolean;
  disabled: boolean;
  scale: ChipsInputScale;
  design: ChipsInputDesign;
  focus: boolean;
}>`
  display: inline-flex;
  flex-direction: row;

  ${({ design, invalid, focus }) => setDesign(design, invalid, focus)};
  ${({ scale }) => (scale && theme.formScales[scale] ? theme.formScales[scale] : theme.formScales.medium)};

  &>.srui-chip {
    transform: scaleX(0);
    padding-left: 0;
    padding-right: 0;
  }
`;
export const input = styled.input<{
  scale: ChipsInputScale;
}>`
  border: none;
  outline: none;
  background: rgba(0,0,0,0);

  &:focus {
    outline: none;
    border: none;
  }
`;
export const autoChipsInput = styled.div`
  position: relative;
`;
export const optionBox = styled.ul<{
  open: boolean;
  scale: ChipsInputScale;
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
  scale: ChipsInputScale
}>`
  padding: 0 ${({ scale }) => selectScale[scale].paddingRL}px;
  &:hover {
    background: ${theme.color.white300};
  }
`;
