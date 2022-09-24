import styled from '@emotion/styled';

export type CollapseOpenStyle = 'show' | 'expanding' | 'expanded' | 'display' | 'shrink' | 'hidden';
export const div = styled.div`

`;
export const achor = styled.div`

`;
const displayState = (open: CollapseOpenStyle) => {
  if (open !== 'hidden') return 'block';
  return 'none';
};
const visibilityState = (open: CollapseOpenStyle) => {
  if (open === 'show' || open === 'hidden') return 'hidden';
  return 'visible';
};
const heightState = (open: CollapseOpenStyle, height: number) => {
  if (open === 'expanding' || open === 'shrink') {
    return `
      height: 0;
      transition: height 0.3s ease-out;
    `;
  }
  if (open === 'expanded' || open === 'display') {
    return `
      height: ${height}px;
      transition: height 0.3s ease-out;
    `;
  }
  return '';
};
export const content = styled.div<{
  open: CollapseOpenStyle;
  height: number;
}>`
  display: ${({ open }) => displayState(open)};
  visibility: ${({ open }) => visibilityState(open)};
  ${({ open, height }) => heightState(open, height)};

  overflow: hidden;
`;
