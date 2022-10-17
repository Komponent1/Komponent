import styled from '@emotion/styled';

export const grid = styled.div<{
  columns: number;
  breakPoint: number[];
  gap: number;
}>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: ${({ gap }) => gap}px;

  ${({ breakPoint, columns }) => (breakPoint.map((point, i) => `
    @media screen and (max-width: ${point}px) {
      grid-template-columns: repeat(${(columns - (1 * (i + 1)) < 0 ? 0 : columns - (1 * (i + 1)))}, 1fr);
    }
  `)).join(`
  `)}
`;
