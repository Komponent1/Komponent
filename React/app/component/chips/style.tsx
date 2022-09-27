import styled from '@emotion/styled';
import theme from '../styles/theme';

export type ChipScale = 'small' | 'medium' | 'large' | 'big';
export type ChipColor = 'grey' | 'primary' | 'semantic' | 'danger';

const background = {
  grey: theme.color.white400,
  primary: theme.color.primary,
  semantic: theme.color.success,
  danger: theme.color.danger,
};

export const chip = styled.div<{
  scale: ChipScale;
  isDelete: boolean;
  color: ChipColor;
}>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background: ${({ color }) => background[color]};
  border-radius: 300px;
  ${({ scale }) => theme.formScales[scale]};
  width: auto;
  ${({ isDelete }) => (isDelete ? 'padding-right: 7px' : null)};
  color: ${({ color }) => (color !== 'grey' ? 'white' : 'black')};
`;
export const chips = styled.div`
  display: inline-flex;
  flex-direction: row;

  &>.srui-chip {
    margin-right: 10px;
  }
`;
export const text = styled.div<{
  isDelete: boolean;
}>`
  ${({ isDelete }) => (isDelete ? 'padding-right: 5px' : null)};
`;
