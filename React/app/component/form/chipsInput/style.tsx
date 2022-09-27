import styled from '@emotion/styled';
import theme from '../../styles/theme';

export type ChipsInputScale = 'small' | 'medium' | 'large' | 'big';
export type ChipsInputDesign = 'normal' | 'underline';

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
